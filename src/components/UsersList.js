import React from 'react'
import Cards from './UI/Cards';

const UsersList = (props) => {
  return (
    <Cards>
        <ul>
            {props.users.map((user, key)=>{
                   return <li key={user.id}>{user.name} ({user.age} years of age)</li>
                })}
        </ul>
    </Cards>
  )
}

export default UsersList;
