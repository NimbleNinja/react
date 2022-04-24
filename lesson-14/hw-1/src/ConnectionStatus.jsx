import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  const setOnStatus = e => {
    setStatus(e.type);
  };

  useEffect(() => {
    window.addEventListener('offline', setOnStatus);
    window.addEventListener('online', setOnStatus);

    return () => {
      window.removeEventListener('offline', setOnStatus);
      window.removeEventListener('online', setOnStatus);
    };
  }, []);

  const classes = status === 'offline' ? 'status status_offline' : 'status';

  return <div className={classes}>{`${status}`}</div>;
};

export default ConnectionStatus;
