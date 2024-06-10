import React from 'react'
import Tracklist from '../tracklist/Tracklist';
import "./SearchResults.css";

// Instead of using props, use unwrap operation to obtain ind. params passed in.
function SearchResults({searchResults, onAdd}) {

  return (
    <div className="SearchResults">
      <h1>Search Results</h1>
          <Tracklist 
            searchResults = {searchResults}
            isRemoval = {false}
            onAdd = {onAdd}
          />
    </div>
  )
}

export default SearchResults