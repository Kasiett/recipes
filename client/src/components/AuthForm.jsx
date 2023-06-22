import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUpOrIn } from '../lib';

export default function AuthForm({ action, onSignIn }) {
  const navigate = useNavigate();
  const [error, setError] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData.entries());
    console.log('action,  email, password, ', action, email, password);
    try {
      const result = await signUpOrIn(action, email, password);
      if (action === 'sign-up') {
        navigate('/sign-in');
      } else if (result.user && result.token) {
        onSignIn(result);
      }
    } catch (err) {
      setError(err);
    }
  }

  const alternateActionTo = action === 'sign-up' ? '/sign-in' : '/sign-up';
  const alternateActionText = action === 'sign-up' ? 'Sign In' : 'Join now';
  const alternateActionText2 =
    action === 'sign-up'
      ? 'Already have an account?'
      : "Don't have an account? ";

  const submitButtonText = action === 'sign-up' ? 'Sign Up' : 'Sign In';
  return (
    <>
      <div className="log-in-form-wrapper">
        <form onSubmit={handleSubmit} className="log-in-form">
          <h4>{submitButtonText}</h4>

          <label htmlFor="email">
            <input
              className="log-in-email"
              id="email"
              name="email"
              type="email"
              placeholder="yours@example.com"
            />
          </label>
          <label htmlFor="email">
            <input
              className="log-in-password"
              id="password"
              name="password"
              type="password"
              placeholder="your password"
            />
          </label>
          {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
          <div className="log-in-btn">
            <button type="submit" className="pointer">
              {submitButtonText}
            </button>
          </div>
        </form>
      </div>
      <div className="join-now">
        <p>{alternateActionText2}</p>
        <Link to={alternateActionTo}>
          <p className="p-join-now">{alternateActionText}</p>
        </Link>
      </div>
    </>
  );
}
