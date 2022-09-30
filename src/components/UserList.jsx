import {useState} from 'react'
import Usersbase from "./Usersbase"
import User from './User'
import UserAdd from './UserAdd'
import ErrorModal from './ErrorModal'
const UserList = ({}) => {
const [UserAddlist,setUserlist] = useState(Usersbase); 
const [error,seterror] = useState(false);


const handleNewUser = (UserList) =>{
    setUserlist((prev)=> { 
      return [UserList, ...prev]
    });
  }
  const handleError = (set) =>{
    seterror(set)
  }
  return (
    <>
     {error ?(<><ErrorModal errors= {error} onerror={handleError}/>  <UserAdd onerror={handleError} onSaveData = {handleNewUser}/></>) :( <>
      <UserAdd onerror={handleError} onSaveData = {handleNewUser}/>
    <User  key = {UserAddlist.id}Users = {UserAddlist}/>
    </>)}
    </>

  )
}

export default UserList