import React from 'react';
import { Link } from 'react-router-dom';
import constellation from '../../pages/Assets/Pictures/logoMoon.png';


import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="mb-4 pb-3 flex-row align-center">
      <div className="header-wrapper">
        <div className="header-image">
          <Link className="text-light" to="/">
            <h1 className="m-0 header-logo" id="logo-header">
              C<img src={constellation} width="50px" height="80px" alt="" />
              smic Infinities{' '}
            </h1>
          </Link>

          {Auth.loggedIn() ? (
            <>
              <Link className="nav-btn" to="/me">
                {Auth.getProfile().data.username}'s Profile
              </Link>
              <Link className="nav-btn" to="/home">
                Forum
              </Link>
              <Link className="nav-btn" to="/" onClick={logout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link className="nav-btn" to="/login">
                Login
              </Link>
              <Link className="nav-btn" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
