import React from 'react';
import { Link } from 'react-router-dom';
// import constellation from '../../pages/Assets/Pictures/favicon-32x32.png'
import Auth from '../../utils/auth';
import logo from '../../pages/Assets/Pictures/cosmicLogo.png'




const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const headerStyle = {
    color: "Black",
    backgroundColor: '#f5eaee;',
    padding: "10px",
  };
  return (
    <header className="text-light mb-4 py-3 flex-row align-center" style={{headerStyle}}>
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            {/* <h1 className="m-0"> <a href="/">
              C<img src={constellation} width="25px" alt=""/>smic Infinities </a> </h1> */}
               <img style={{width: 550, height: 200, alignSelf: 'center' }}src={logo} alt="logo" />
          </Link>

        </div>
        <div>
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
