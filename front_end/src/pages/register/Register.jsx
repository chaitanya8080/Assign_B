

import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./register.css"
function Register() {

  const [username , setUsername]= useState('')
  const [email , setEmail]= useState('')
  const [password , setPassword]= useState('')
// console.log(username, email, password);
const handleSubmit = async(e)=>{
  e.preventDefault()
await axios.post("http://localhost:6007/register",{
  username:username,
  email :email,
  password:password,
}).then((res)=>{
  console.log(res);
  res.data && window.location.replace("/login");
}).catch((err)=>{
  console.log(err.message);
  alert("email or password already exist");
})
}

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className='registerForm' onSubmit={handleSubmit}>
            <label htmlFor="" type="text">Username</label>
            <input type="text" className='registerInput' placeholder='Enter Username' onChange={(e)=>setUsername(e.target.value)}/>
            <label htmlFor="" type="text">Email</label>
            <input type="email" className='registerInput' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="" type="Password">Password</label>
            <input type="password"className='registerInput' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>

            <button className='registerButton' type='submit'value="submit">Register</button>
        </form>

        <button className='registerLoginButton' >
          <Link to="/login" className="link">Login</Link></button>

    </div>
  )
}

export default Register