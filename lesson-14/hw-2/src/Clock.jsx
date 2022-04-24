import React, { useEffect, useState } from 'react';
const moment = require('moment');

const Clock = ({ location, offset }) => {
  const date = moment(new Date());
  const hours = date.hours();
  date.hours(hours + offset);
  const [time, setTime] = useState(date);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = moment(new Date());
      const hours = currentTime.hours();
      currentTime.hours(hours + offset);

      setTime(currentTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='clock'>
      <div className='clock__location'>{location}</div>
      <div className='clock__time'>{time.format('H:mm:ss A')}</div>
    </div>
  );
};

export default Clock;
