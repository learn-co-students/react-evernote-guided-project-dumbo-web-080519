import React from 'react';

const Search = ({handleSearchChange}) => {
  return (
    <div className="filter">
      <input
        onChange={(evt) => {handleSearchChange(evt)}}
        id="search-bar"
        type="text"
        placeholder="Search Notes"
      />
    </div>
  );
}

export default Search;
