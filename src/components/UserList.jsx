import {useState} from 'react'
import Usersbase from "./Usersbase"
import User from './User'
import UserAdd from './UserAdd'
const UserList = () => {
const [UserAddlist,setUserlist] = useState(Usersbase); 
  
const handleNewUser = (UserList) =>{
    setUserlist((prev)=> { 
      return [UserList, ...prev]
    });
  }
  
  return (
    <>
    <UserAdd onSaveData = {handleNewUser}/>
    <User  key = {UserAddlist.id}Users = {UserAddlist}/>
    </>

  )
}

export default UserList