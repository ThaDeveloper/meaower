import React from 'react';

const Pagination = ({ imagesPerPage, totalImages, paginate, currentPage }) => {
  const pageLinks = [];
  const pages = Math.ceil(totalImages / imagesPerPage);
  for (let i = 1; i <= pages; i++) {
    let active = currentPage === i ? 'active' : '';
    pageLinks.push(
      <button onClick={() => paginate(i)} className={active} key={i}>
        {i}
      </button>
    );
  }
  return (
    <div className='tabs'>
      {currentPage > 1 && (
        <button onClick={() => paginate(currentPage - 1)}>Prev</button>
      )}
      {pageLinks}
      {currentPage < pages && (
        <button onClick={() => paginate(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};
export default Pagination;
