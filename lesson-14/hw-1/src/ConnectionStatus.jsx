import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  const setOnlineStatus = e => {
    setStatus(e.type);
  };

  useEffect(() => {
    window.addEventListener('offline', setOnlineStatus);
    window.addEventListener('online', setOnlineStatus);

    return () => {
      window.removeEventListener('offline', setOnlineStatus);
      window.removeEventListener('online', setOnlineStatus);
    };
  }, []);

  const classes = status === 'offline' ? 'status status_offline' : 'status';

  return <div className={classes}>{`${status}`}</div>;
};

export default ConnectionStatus;
