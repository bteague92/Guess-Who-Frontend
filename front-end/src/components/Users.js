import React, { useState, useEffect} from "react";
import axios from "axios";
import UserCard from './UserCard';
import SearchBar from './SearchBar';
import NavMenu from "./NavMenu";

export default function Users() {
    // original state
    const [chars, setChars] = useState([]);
    // filtered state
    const [filterChars, setFilterChars] = useState([]);

    // search logic to compare original state to filtered
    const search = (value) => {
      if (value === "") {
       // limit original users state to a hundred
        setFilterChars(chars.slice(-100));
      } 
      
      else {
        const filterArray = chars.filter(char => {
          return char['username'].toLowerCase().search(value.toLowerCase())  > -1 ;
        })
         // limit filtered users state to a hundred
        setFilterChars(filterArray.slice(-100));
      }
    }

    // hook to get API request
    useEffect(() => {
    
      axios.get('https://backend-guesswho.herokuapp.com/api/auth/users')
        .then((response) => {
          console.log(response.data)
          setChars(response.data);
          setFilterChars(response.data);
        })
        .catch(err => console.log(err));
    }, []); 

  return (

    <div className="usersContainer">

      <div className="NavMenu">
      {/* Added NavMenu here */}
      <NavMenu/> 
      </div>

      <div className="usersList">
      <h2>User List</h2>
      <SearchBar search = {search} />
      {filterChars.map((char) => {
        return ( 
          <UserCard
            key={char.id} 
            name={char.username} />
        )
      })}
    </div>
    </div>
  );
}
