import React, { useState } from 'react'
import { Alert, Button } from "react-bootstrap"; // import with greed function


export default function Login() {

    const [userName, setUserName] = useState('');
    const[password, setPassword] = useState('');

    return (
       <div> 
        <label>Email:</label>
        <input placeholder="username" type="text"></input>   
        <label>Password:</label>
        <input type="text" placeholder="password"></input>   
        <Button>Login</Button>
      </div>
    );
  }