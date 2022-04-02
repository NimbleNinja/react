import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';

const rootElem = document.querySelector('#root');

const root = ReactDOMClient.createRoot(rootElem);
root.render(<h1 className='title'>Todo List</h1>);
