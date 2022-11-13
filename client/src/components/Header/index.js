import React from 'react';
import { Link } from 'react-router-dom';
import constellation from '../../pages/Assets/Pictures/favicon-32x32.png'
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
    <header className="text-light mb-4 pb-3 flex-row align-center">
      <div className="header-wrapper">
        <div className="header-image">
          <Link className="text-light" to="/">
            <h1 className="m-0 header-logo"> <a href="/">
              C<img src={constellation} width="25px" alt=""/>smic Infinities </a> </h1>
          </Link>
        </div>
        <div className='nav-links'>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/home">
                Forum
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-sm btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-sm btn-light m-2" to="/signup">
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
