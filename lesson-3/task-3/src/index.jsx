import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Comment from './Comment.jsx';

const user = {
  name: 'Tom',
  avatarUrl:
    'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU',
  author: 'author',
  text: 'text',
  date: new Date(),
};

ReactDOM.render(<Comment user={user} />, document.querySelector('#root'));
