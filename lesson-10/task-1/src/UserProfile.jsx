import React from 'react';

const UserProfile = props => {
  if (!props.userData) {
    return null;
  }
  const { name, location, avatar_url } = props.userData;
  return (
    <div className='user'>
      <img alt='User Avatar' src={avatar_url} className='user__avatar' />
      <div className='user__info'>
        <span className='user__name'>{name}</span>
        <span className='user__location'>{location}</span>
      </div>
    </div>
  );
};

export default UserProfile;
