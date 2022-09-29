import {useState} from "react";
import styled from "styled-components";
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;
    /* .input {
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
}

.input label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.input input {
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;
}

.input input:focus {
  outline: none;
  border-color: #4f005f;
} */
`;

const Innerform = styled.div`
  display:flex; 
  width: 100%;`

const User = ({onSaveData}) => {
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
    const UserList = {
      id: Math.round(Math.random() * 100),
      name: name,
      age: age,
    };
    onSaveData( UserList);
    setName("");
    setAge("");
   }

  return (
    <div>
      <Form onSubmit = {handleSubmit}>
        <Innerform >
          <label>Username</label>
        </Innerform>
        <Innerform >
          <input type="text" value={name} onChange = {nameHandler}/>
        </Innerform>
        <Innerform >
          <label>Age</label>
        </Innerform>
        <Innerform >
          <input type="number" value={age} onChange = {ageHandler} />
        </Innerform>
        <input type="submit" value="Add User " />
      </Form>
    </div>
  );
};

export default User;
