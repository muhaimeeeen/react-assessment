import React, { useState } from 'react'
import "./SearchBar.css"
function SearchBar({onSearch}) {

const [searchedTerm, setsearchedTerm] = useState("");

// function handleSearch will trigger onSearch
function handleSearch(event){
  event.preventDefault(); 
  event.stopPropagation();
  onSearch(searchedTerm);
}

  // function that paasses the value from input to state called searchedItem 
  function handleSearchChange(event){
    setsearchedTerm(event.target.value);
  }

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleSearchChange} />
      <button className="SearchButton" onClick={handleSearch}>SEARCH INFO</button>
    </div>
  )
}

export default SearchBar