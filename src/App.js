import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';


const App = () => {
  const [userDetails, SetUserDetails] = useState([]);

  const getUserDetails = (userName, userAge)=>{
    SetUserDetails((previousDetails)=>{
      return [{name: userName, age: userAge, id: Math.random().toString()}, ...previousDetails];
    })
  }
  return (
    <div>
      <AddUser onUserDetails = {getUserDetails}/>
      <UsersList users={userDetails}/>
    </div>
  );
}

export default App;

