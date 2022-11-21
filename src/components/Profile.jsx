import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth.context';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return <p>{JSON.stringify(currentUser, null, 2)}</p>;
};

export default Profile;
