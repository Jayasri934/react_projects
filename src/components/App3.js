// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useState} from "react";
import './App3.css';

export default function App3() {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

    const[msg,setMsg]=useState();
    const handleSubmit=()=>{
        if(email==="john@gmail.com" && password==="1234"){
            setMsg("Welcome");
        }
        else{
            setMsg("Access Denied");
        }
    };
  return (
    <div>
      <h3>Login</h3>
      <p>
        <input type="text" onChange={(event)=>setEmail(event.target.value)}></input>
        </p>
      <p>
      <input type="password" onChange={(event)=>setPaassword(event.target.value)}></input>
      <p><button onclick={}>Log in</button></p>
    </div>
  )
}