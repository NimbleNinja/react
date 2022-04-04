import React from 'react';
const moment = require('moment');

const Greeting = props => {
  const now = moment();
  const birthDate = moment(props.birthDate);
  const currentYearBirthDay = moment()
    .month(birthDate.month())
    .date(birthDate.date());

  const age =
    currentYearBirthDay < now
      ? now.year() - birthDate.year()
      : now.year() - birthDate.year() - 1;

  return (
    <div className='greeting'>{`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}</div>
  );
};

export default Greeting;
