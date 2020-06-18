import React, {useEffect, useReducer} from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import { reducer, initialState } from './reducer';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=a5c89c1a"; 

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((res) => res.json())
      .then((resJSON)=> {
        dispatch({type: 'SEARCH_MOVIE_SUCCESS', payload: resJSON.Search})
      })
  }, []);

  const searchMovie = (searchValue) => {
    dispatch({type: 'SEARCH_MOVIE_REQUEST'})

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=a5c89c1a`)
      .then((res) => res.json())
      .then((resJSON) => {
        if (resJSON.Response === 'True') {
          dispatch({type: 'SEARCH_MOVIE_SUCCESS', payload: resJSON.Search})
        } else {
          dispatch({type: 'SEARCH_MOVIES_FAILURE', error: resJSON.Error})
        }
      });
  }

  const { movies, errorMessage, loading } = state;
  return (
    <div className="App">
      <Header text='YOUR MOVIE'/>
      <Search searchMovie={searchMovie}/>
      <p className="App-intro">Search movie by your name</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (<Movie key={`${index}-${movie.Title}`} movie={movie}/>))
        )}
      </div>
    </div>
  );
}

export default App;
