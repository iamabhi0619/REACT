import React from 'react'
import UserProfileCard from './UserProfileCard'
import users from '../data/user'

function UserProfile() {
  return (
    <div className='flex flex-wrap justify-around'>
      {users.map(user=>
        <UserProfileCard
        key={user.id}
        userid = {user.userid}
        isvarified={user.isvarified}
        name= {`${user.first_name} ${user.last_name}`}
        time={user.time}
        gender={(user.gender === "Male") ? "boy" : "girl"}
        />)}
    </div>
  )
}

export default UserProfile