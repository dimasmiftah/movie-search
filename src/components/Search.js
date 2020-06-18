import React from 'react';
import { useState } from 'react';

const Search = ({searchMovie}) => {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovie(searchValue);
    setSearchValue('')
  }
  return (  
    <form className="search">
      <input type="text" value={searchValue} onChange={handleChange}/>
      <input type="submit" value="SEARCH" onClick={handleSubmit}/>
    </form>
  );
}

export default Search;