import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './Greeting.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <Greeting
    firstName='John'
    lastName='Doe'
    birthDate={new Date('2001-01-01T11:11:11.819Z')}
  />
);

//'2001-01-01T11:11:11.819Z'
