import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
      <div className="form-wrapper">
        <form className="log-in-form" action="">
          <h4>Sign up</h4>
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
            <button type="submit">Join now</button>
            <MdKeyboardArrowRight className="log-in-icon" />
          </div>
        </form>
      </div>
      <div className="join-now">
        <p>Already have an account?</p>
        <Link to="/log-in">
          <p className="p-join-now">Log in</p>
        </Link>
      </div>
    </>
  );
}
