import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const url = 'https://api.github.com/users';

const User = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`${url}/${userId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(userData => {
        const { name, location, avatar_url } = userData;
        setUserData({ name, location, avatar_url });
      });
  }, [userId]);

  const { name, avatar_url, location } = userData;

  return (
    <div className='user'>
      <img alt={name} src={avatar_url} className='user__avatar' />
      <div className='user__info'>
        <span className='user__name'>{name}</span>
        <span className='user__location'>{location}</span>
      </div>
    </div>
  );
};

export default User;
