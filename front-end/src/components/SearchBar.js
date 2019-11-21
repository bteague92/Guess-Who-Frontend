import React from "react";

function SearchBar(props) {
  return (
    <input className="searchInput"
      onChange = {(event) => props.search(event.target.value)}
      maxLength = {60}
      placeholder = 'Search' 
    //   required
      />   );
}


export default SearchBar;