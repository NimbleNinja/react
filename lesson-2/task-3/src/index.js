import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';

const rootElem = document.querySelector('#root');

// input: date
// return: undefined
const renderSeconds = date => {
  const seconds = new Date(date).getSeconds();

  const style = {
    background: seconds % 2 === 0 ? 'white' : 'black',
    color: seconds % 2 !== 0 ? 'white' : 'black',
  };

  const secondsElem = (
    <div className='seconds' style={style}>
      {`Now is ${seconds}`}
    </div>
  );

  ReactDOM.render(secondsElem, rootElem);
};

renderSeconds(new Date());
