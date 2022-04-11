import React from 'react';

const HistoryItem = ({ step, countOfSteps, onClick }) => {
  return (
    <li className='game__history-item'>
      <button onClick={() => onClick(step)}>{`Step ${
        step + 1
      } of ${countOfSteps}`}</button>
    </li>
  );
};

export default HistoryItem;
