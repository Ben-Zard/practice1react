import {useState} from "react";
import styled from "styled-components";
import Card from "./UI/Card"
const Form = styled.form`

 margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;


& label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
& input {
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #830000;
  padding: 0.15rem;
  margin-bottom: 0.5rem;
}

& input:focus {
  outline: none;
  background-color: #e7e7e78f;
  border-color: #4f005f;
}
`;


const User = ({onSaveData,onerror}) => {
 const [name,setName] = useState('');
 const [age,setAge] = useState('');
  


  const  ageHandler = (event) => {
    setAge(event.target.value);
  }
  const  nameHandler = (event) => {
    setName(event.target.value);
  }

  const  handleSubmit = (e) => {
    e.preventDefault(); //stops from reloading page
    if (name.trim() === '' ||age.trim() === 0 ){
      onerror(true);
      return;
    }else{
    const UserList = {
      id: Math.round(Math.random() * 100),
      name: name,
      age: age,
    };
    onSaveData( UserList);
    setName("");
    setAge("");
  }
  }

  return (
    <Card className="input">
      <Form onSubmit = {handleSubmit}>
          <label>Username</label>
          <input type="text" value={name} onChange = {nameHandler}/>
          <label>Age</label>
          <input type="number" value={age} onChange = {ageHandler} />
        <input type="submit" value="Add User " />
      </Form>
    </Card>
  );
};

export default User;
