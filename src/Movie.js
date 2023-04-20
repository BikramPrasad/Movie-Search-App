import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Movie = ({ imdbID, Poster, Title }) => {
  const navigate = useNavigate();

  const handleClick = (imdbID) => {
    navigate(`/detail/${imdbID}`);
  };

  let title = String(Title);
  let myspace = 25;
  if (title.length > myspace) {
    title = title.substring(0, myspace) + '...';
  }
  return (
    <div className='col-md-3'>
      <div className='well text-center'>
        <img src={Poster} alt={Title} />
        <h5>{title}</h5>
        <Link
          className='btn btn-primary'
          to={`/detail/${imdbID}`}
          onClick={() => {
            handleClick(imdbID);
          }}
        >
          Movie Details
        </Link>
      </div>
    </div>
  );
};

export default Movie;
