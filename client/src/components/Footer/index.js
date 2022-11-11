import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import constellation from '../../pages/Assets/Pictures/favicon-32x32.png'

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h6>
         <img src={constellation} width="15px" alt=""/> Cosmic Infinities
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
