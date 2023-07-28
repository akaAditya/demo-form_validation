import React, { useState } from "react";
import Cards from "./UI/Cards";
import "./AddUser.css";
import Button from "./Button";
import ErrorModel from "./ErrorModel";

const AddUser = (props) => {
  const [enteredtUserName, setEnteredUserName] = useState("");
  const [enteredtAge, setEnteredAge] = useState("");
  const [error, setError] = useState()
  const addNewUser = (event) => {
    event.preventDefault();

    if(enteredtUserName.trim().length===0 || enteredtAge.trim().length===0){
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).'
        })
        return;
    }
    if(+enteredtAge<1){
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (>0).'
        })
        return;
    }
    props.onUserDetails(enteredtUserName, enteredtAge);
        setEnteredUserName("");
        setEnteredAge("");
  };
  const getUsername = (event) => {
    setEnteredUserName(event.target.value);
  };

  const getAge = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = ()=>{
    setError(null);
  }
  return (
    <>
    {error && <ErrorModel title={error.title} message={error.message} onConfirm = {errorHandler}/>}
    <Cards>
      <form onSubmit={addNewUser} className="form-text">
        <label className="form-text label">UserName</label>
        <input
          className="form-text input"
          value={enteredtUserName}
          type="text"
          onChange={getUsername}
        ></input>
        <label className="form-text label">Age</label>
        <input
          className="form-text input"
          type="number"
          value={enteredtAge}
          onChange={getAge}
        ></input>
        <Button className="form-text button" type="submit">
          Add User
        </Button>
      </form>
    </Cards>
    </>
  );
};

export default AddUser;
