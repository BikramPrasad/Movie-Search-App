import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Movies from './Movies';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('Superman');
  const [inputValue, setInputValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    fetchMovies(searchText);
    setInputValue(searchText);
    setSearchText('');
  };
  const handleInputChanged = (e) => {
    setSearchText(e.target.value);
  };
  const fetchMovies = async (text = 'Superman') => {
    setLoading(true);
    try {
      const url = `https://www.omdbapi.com?apikey=${process.env.REACT_APP_SEARCH_URL}${text}`;
      const response = await fetch(url);
      const movies = await response.json();
      setLoading(false);
      setMovies(movies.Search);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <div>
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
        <div className='jumbotron'>
          <h3 className='text-center'>Search For Any Movie</h3>
          <form id='searchForm' onSubmit={(e) => onSubmit(e)}>
            <input
              type='text'
              id='searchText'
              className='form-control'
              placeholder='Search Movie...'
              value={searchText}
              onChange={handleInputChanged}
            />
            <br />
            <button type='button' className='btn btn-primary'>
              Search
            </button>
          </form>
        </div>
      </div>
      <Movies movies={movies} searchText = {inputValue} />
    </div>
  );
}

export default App;
