import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function LogIn() {
  return (
    <>
      <div className="log-in-form-wrapper">
        <form className="log-in-form" action="">
          <h4>Log in</h4>

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
            <button type="submit">Log in</button>
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
