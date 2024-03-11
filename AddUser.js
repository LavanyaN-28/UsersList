import React, { useState, useRef} from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameInputRef=useRef();
  const ageInputRef=useRef();
  const collegeInputRef=useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName=nameInputRef.current.value;
    const eneteredUserAge=ageInputRef.current.value;
    const enteredCollegeName=collegeInputRef.current.value;

    if (enteredName.trim().length === 0 || eneteredUserAge.trim().length === 0 || enteredCollegeName.trim().length === 0 ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+eneteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredName, eneteredUserAge, enteredCollegeName);
    // setEnteredUsername("");
    // setEnteredAge("");
    // nameInputRef.current.value='';
    // ageInputRef.current.value='';
  };

//   const usernameHandler = (event) => {
//     setEnteredUsername(event.target.value);
//   };

//   const ageHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageHandler}
            ref={ageInputRef}
          />
          <label htmlFor="collegename">College Name</label>
          <input
            id="collegename"
            type="text"
            ref={collegeInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
