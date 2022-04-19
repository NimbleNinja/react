import React from 'react';

const Expand = ({ title, children, toggleShow, isShow }) => {
  const iconClass = `fa-solid fa-chevron-${isShow ? 'up' : 'down'}`;

  return (
    <div className='expand border'>
      <div className='expand__header'>
        <span className='expand__title'>{title}</span>
        <button className='expand__toggle-btn' onClick={toggleShow}>
          <i className={iconClass}></i>
        </button>
      </div>
      {isShow ? children : null}
    </div>
  );
};

export default Expand;
