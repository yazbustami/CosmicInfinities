import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import aquarius from './Assets/cardHeaders/aquariusbd.png';
import aries from './Assets/cardHeaders/ariesbd.png';
import cancer from './Assets/cardHeaders/cancerbd.png';
import capricorn from './Assets/cardHeaders/capribd.png';
import gemini from './Assets/cardHeaders/geminibd.png';
import leo from './Assets/cardHeaders/leobd.png';
import libra from './Assets/cardHeaders/librabd.png';
import pisces from './Assets/cardHeaders/piscesbd.png';
import sagittarius from './Assets/cardHeaders/sagittbd.png';
import scorpio from './Assets/cardHeaders/scorpiobd.png'
import taurus from './Assets/cardHeaders/taurusbd.png';
import virgo from './Assets/cardHeaders/virgobd.png';


const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    sign: ''
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4 ">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/home">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your sign"
                  name="sign"
                  type="text"
                  value={formState.sign}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit 💫
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4">
          <div className="col mb-4">
            <div className="card">
              <img src={aries} className="card-img-top" alt="aries" />
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={taurus} className="card-img-top" alt="taurus" />
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={gemini} className="card-img-top" alt="gemini" />
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={cancer} className="card-img-top" alt="cancer" />
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={leo} className="card-img-top" alt="leo" />
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={virgo} className="card-img-top" alt="virgo" />
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={libra} className="card-img-top" alt="libra" />
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={scorpio} className="card-img-top" alt="scorpio" />
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={sagittarius} className="card-img-top" alt="saggitarius" />
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={capricorn} className="card-img-top" alt="capricorn" />
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={aquarius} className="card-img-top" alt="aquarius" />
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={pisces} className="card-img-top" alt="pisces" />
            </div>
          </div>
        </div>

        <div class="card text-center">
          <div class="card-header p-3">
          </div>
          <div class="card-body">
            <p className='zodiac-info'>You can read more about your sign and cosmic infinity here.</p>
            <Link className="btn btn-secondary" to="/zodiac">
              More Cosmic Infinities
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
