import React,{Fragment, useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList,setUsersList] = useState([]);

  const addUserHandler = (userName,userAge,userCollege) => {
    setUsersList((prevUserList) => {
      return [...prevUserList,{name : userName , age : userAge, collegeName:userCollege, id: Math.random().toString()}];

    })
  }
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
