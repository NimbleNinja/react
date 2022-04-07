import React from 'react';
import './pagination.scss';

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const isPrevPageAvailable = currentPage === 1;
  const isNextPageAvailable =
    currentPage === Math.ceil(totalItems / itemsPerPage);
  return (
    <div className='pagination'>
      <button disabled={isPrevPageAvailable} onClick={goPrev} className='btn'>
        {isPrevPageAvailable ? '' : '←'}
      </button>
      <span className='pagination__page'>{currentPage}</span>
      <button disabled={isNextPageAvailable} onClick={goNext} className='btn'>
        {isNextPageAvailable ? '' : '→'}
      </button>
    </div>
  );
};

export default Pagination;
