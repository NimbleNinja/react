import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './Profile.jsx';

const userData = {
  firstName: 'James',
  lastName: 'Bond',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Profile userData={userData} />);
