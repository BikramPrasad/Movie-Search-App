import Movie from './Movie';
import NotFound from './NotFound';
const Movies = ({ movies }) => {
  return (
    <div className='container'>
      <div id='movie' className='row'>
        {movies && movies.length > 0 ? (
          movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
          <div>
            {' '}
            <NotFound />
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
