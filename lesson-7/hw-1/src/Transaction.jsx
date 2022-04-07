import React from 'react';
const moment = require('moment');

const Transaction = ({ from, to, amount, rate, time }) => {
  const timeToFormat = moment(time);
  const amountFormatter = new Intl.NumberFormat('en-GB');
  return (
    <li className='transaction'>
      <span className='transaction__date'>{timeToFormat.format('D MMM')}</span>
      <span className='transaction__time'>{timeToFormat.format('HH:mm')}</span>
      <span className='transaction__assets'>{`${from} → ${to}`}</span>
      <span className='transaction__rate'>{rate}</span>
      <span className='transaction__amount'>
        {amountFormatter.format(amount)}
      </span>
    </li>
  );
};

export default Transaction;
