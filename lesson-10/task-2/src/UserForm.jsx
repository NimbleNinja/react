import React from 'react';

const UserForm = props => {
  const { firstName, lastName } = props.userData;
  return (
    <form className='user-form'>
      <input
        onChange={props.changeHandler}
        type='text'
        name='firstName'
        className='user-form__input'
        value={firstName}
      />
      <input
        type='text'
        name='lastName'
        className='user-form__input'
        value={lastName}
        onChange={props.changeHandler}
      />
    </form>
  );
};

export default UserForm;
