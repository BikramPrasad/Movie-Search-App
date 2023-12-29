import React from 'react';

const NotFound = ({searchText}) => {
  return (
    <div className='col-md'>
      <h2 align='center'>No movies with the name <span style={{ fontWeight: 'bold', color:'red' }}>{searchText}</span> were found !</h2>
    </div>
  );
};

export default NotFound;
