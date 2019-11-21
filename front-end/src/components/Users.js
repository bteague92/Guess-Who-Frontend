// import React, { useState, useEffect} from "react";
// import axios from "axios";
// import UserCard from './UserCard';
// import SearchBar from './SearchBar';

// export default function Users() {
//     // original list
//     const [chars, setChars] = useState([]);
//     // filtered list
//     const [filterChars, setFilterChars] = useState([]);

//     const search = (value) => {
//       if (value === "") {

//         setFilterChars(chars.slice(-100));
//       } 

//       else {
//         const filterArray = chars.filter(char => {
//           return char['username'].toLowerCase().search(value.toLowerCase())  > -1 ;
//         })

//         setFilterChars(filterArray.slice(-100));
//       }
//     }

//     useEffect(() => {

//       axios.get('https://backend-guesswho.herokuapp.com/api/auth/users')
//         .then((response) => {
//           console.log(response.data)
//           setChars(response.data);
//           setFilterChars(response.data);
//         })
//         .catch(err => console.log(err));
//     }, []); // runs once after rendering

//   return (
//     <section className="loginForm">

//       <h2>Users</h2>
//       <SearchBar search = {search} />
//       {filterChars.map((char) => {
//         return ( 
//           <UserCard
//             key={char.id} 
//             name={char.username} />
//         )
//       })}
//     </section>
//   );
// }
