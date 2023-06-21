import { MdKeyboardArrowRight } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LogIn() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData(event.target);
      const userData = Object.fromEntries(formData.entries());
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/auth/sign-in', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const { user, token } = await res.json();
      console.log('Signed In', user, '; received token:', token);
    } catch (err) {
      alert(`Error signing in: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <div className="log-in-form-wrapper">
        <form onSubmit={handleSubmit} className="log-in-form">
          <h4>Sign in</h4>

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
          {/* <p className="forgot-password">Forgot your password</p> */}
          <div className="log-in-btn">
            <button type="submit" disabled={isLoading}>
              Log in
            </button>
            <MdKeyboardArrowRight className="log-in-icon" />
          </div>
        </form>
      </div>
      <div className="join-now">
        <p>Don't have an account?</p>
        <Link to="/sign-up">
          <p className="p-join-now">Join now</p>
        </Link>
      </div>
    </>
  );
}
