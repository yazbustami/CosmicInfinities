import React, {useEffect, useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

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
    if(profile?.sign){
      fetch(`https://aztro.sameerkumar.website/?sign=${profile.sign}&day=today`, {method: "POST"})
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
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>
        <div>
        <p>{signState.date_range}</p>
        <p>{signState["current_date"]}</p>
        <p>Description: {signState.description}</p>
        {/* <p>Compatability: {signState.compatability}</p> */}
        <p>Mood: {signState.mood}</p>
        <p>Color: {signState.color}</p>
        <p>Lucky Number: {signState.lucky_number}</p>
        <p>Lucky Time: {signState.lucky_time}</p>
      </div>

      </div>
    </div>
  );
};

export default Profile;
