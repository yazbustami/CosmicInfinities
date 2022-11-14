import React from 'react';
import { Link } from 'react-router-dom';
import constellation from '../../pages/Assets/Pictures/logoMoon.png'
// import hands from '../../pages/Assets/Pictures/handsLogo.png'
import Auth from '../../utils/auth';
// import logo from '../../pages/Assets/Pictures/cosmicLogo.png'
// import headImg from '../../pages/Assets/allPages/headerImg.png';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  // const headerStyle = {
  //   color: "Black",
  //   backgroundColor: '#f5eaee;',
  //   padding: "10px",
  // };
  return (
    <header className="mb-4 pb-3 flex-row align-center">
      <div className="header-wrapper">
        <div className="header-image">
          <Link className="text-light" to="/">
            <h1 className="m-0 header-logo"> <a href="/">
              C<img src={constellation} width="50px" height="80px" alt="" />smic Infinities </a> </h1>
          </Link>
        </div>
        <div className='nav-links'>
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
