import React from "react";

function SearchBar(props) {
  return (
    <input className="searchInput"
      onChange = {(event) => props.search(event.target.value)}
      maxLength = {60}// 60 character only
      placeholder = "Search by User's Name"
      />   );
}


export default SearchBar;