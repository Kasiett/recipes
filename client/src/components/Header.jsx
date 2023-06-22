import { BiSearchAlt } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { Outlet, Link } from 'react-router-dom';
import { FaBolt, FaSignOutAlt } from 'react-icons/fa';
import AppContext from '../components/AppContext';
import React, { useContext } from 'react';

export default function Header({ setType }) {
  const { user, handleSignOut } = useContext(AppContext);

  return (
    <>
      <div className="header">
        <nav>
          <Link to="/" onClick={() => setType('')}>
            <h1 className="upper-logo">PlantPower</h1>
          </Link>

          <ul className="nav-bar">
            <BiSearchAlt className="li-nav-bar icon-search" />
            <FaUserCircle className="li-nav-bar icon-user" />
            <li className="li-nav-bar">
              {!user && (
                <>
                  <Link to="/sign-in">Sign In</Link>
                </>
              )}
              {user && <span onClick={handleSignOut}>Sign out</span>}
            </li>
            <li className="li-nav-bar border-left">
              <a href="#">Popular</a>
            </li>
            <li className="li-nav-bar border-left">
              <Link to="/add-recipe">Add Recipe</Link>
            </li>
          </ul>
        </nav>
        <ul className="sortby">
          <li>
            <a href="#" onClick={() => setType('salads')}>
              Salads
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setType('entrees')}>
              Entrees
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setType('smoothies')}>
              Smoothies
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setType('drinks')}>
              Drinks
            </a>
          </li>
        </ul>
      </div>
      <div className="log-out-box"> Log out</div>
      <Outlet />
    </>
  );
}
