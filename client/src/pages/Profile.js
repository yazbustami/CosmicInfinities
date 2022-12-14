import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import cosmic from './Assets/allPages/headerImg.png'

const Profile = () => {
  const { username: userParam } = useParams();
  console.log(userParam);

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  console.log(data);

  const user = data?.me || data?.user || {};
  console.log("user", user);

  const [signState, setSignState] = useState({})

  // Using API 
  useEffect(() => {
    const profile = data?.me || data?.user || {};
    console.log(profile)
    if (profile?.sign) {
      fetch(`https://aztro.sameerkumar.website/?sign=${profile.sign}&day=today`, { method: "POST" })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setSignState(data)
        })
    }

  }, [data])

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (


    <div className="flex-row justify-center mb-3 row">
      <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5 w-100">
        Viewing {userParam ? `${user.username}'s` : 'your'} profile.
      </h2>

      <div className="card mb-3"
        style={{ maxWidth: '100%' }}>
        <div className="row no-gutters">
          <div className="col-md-4 card-img-side" id="profile-card">
            <img style={{ width: 300, height: 300 }} src={cosmic} alt="..." className='cosmic-img' />
          </div>
          <div className="col-md-8 p-0">
            <div className="card-body">
              <h5 className="card-title">{signState["current_date"]}</h5>
              <p className="card-text">Description: {signState.description}</p>
              <p className="card-text">Mood: {signState.mood} </p>
              <p className="card-text">Color: {signState.color}</p>
              <p className="card-text">Lucky Number: {signState.lucky_number}</p>
              <p className="card-text">Lucky Time: {signState.lucky_time}</p>
              <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
