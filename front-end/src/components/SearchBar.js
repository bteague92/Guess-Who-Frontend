import React from "react";

function SearchBar(props) {
  return (
    <input className="searchInput"
      onChange = {(event) => props.search(event.target.value)}
      placeholder = 'Name' />   );
}


export default SearchBar;