import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth.context';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return <p>{JSON.stringify(currentUser, null, 2)}</p>;
};

export default Profile;
