import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import constellation from '../../pages/Assets/Pictures/favicon-32x32.png'

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto p-4 footer footer-image">
      <div className="container text-center">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <a href="https://github.com/yazbustami/CosmicInfinities" target="_blank">
          <h6>
            <img src={constellation} width="15px" alt=" constellation"
            /> Cosmic Infinities
          </h6>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
