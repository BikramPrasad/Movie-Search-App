import Movie from './Movie';
import NotFound from './NotFound';
const Movies = ({ movies, searchText }) => {
  return (
    <div className='container'>
      <div id='movie' className='row'>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <Movie
              key={movie.imdbID}
              {...movie}
              Poster={
                movie.Poster === 'N/A'
                  ? 'https://dummyimage.com/300/000000/fff.png&text=No+Image+Available'
                  : movie.Poster
              }
            />
          ))
        ) : (
          <div>
            {' '}
            <NotFound searchText = {searchText}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
