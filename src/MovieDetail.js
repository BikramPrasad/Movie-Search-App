import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { imdbID } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovieByID = async () => {
      setLoading(true);
      try {
        const url = `https://www.omdbapi.com?apikey=${process.env.REACT_APP_SEARCH_BYID_URL}${imdbID}`;
        const response = await fetch(url);
        const movie = await response.json();
        setLoading(false);
        setMovie(movie);
      } catch (error) {
        setLoading(true);
        console.log(error);
      }
    };
    fetchMovieByID();
  }, [imdbID]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <nav className='navbar navbar-default'>
        <div className='container'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='/'>
              MovieInfo
            </a>
          </div>
        </div>
      </nav>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img
              src={
                movie?.Poster === 'N/A'
                  ? 'https://dummyimage.com/300/000000/fff.png&text=No+Image+Available'
                  : movie?.Poster
              }
              className='thumbnail'
              alt={movie.Title}
            />
          </div>
          <div className='col-md-8'>
            <h2>{movie.Title}</h2>
            <ul className='list-group'>
              <li className='list-group-item'>
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className='list-group-item'>
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className='list-group-item'>
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className='list-group-item'>
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className='list-group-item'>
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className='list-group-item'>
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className='list-group-item'>
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='well'>
            <h3>Plot</h3>
            {movie.Plot}
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='well'>
            <h3>Rating</h3>
            <br />
            {movie.Ratings.map((e) => (
              <li key={e.Source}>
                {' '}
                {e.Source} {' - '}
                {e.Value}
              </li>
            ))}
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
