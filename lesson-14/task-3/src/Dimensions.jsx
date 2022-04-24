import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const setSize = e => {
      const { innerWidth, innerHeight } = e.target;
      setScreenSize({
        width: innerWidth,
        height: innerHeight,
      });
    };
    window.addEventListener('resize', setSize);

    return () => window.removeEventListener('resize', setSize);
  }, []);

  const { width, height } = screenSize;
  return <div className='dimensions'>{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
