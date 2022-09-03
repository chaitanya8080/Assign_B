



import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import "./login.css"
function Login() {

  const [email , setEmail]= useState('')
  const [password , setPassword]= useState('')
  const { dispatch } = useContext(Context);


const handleSubmit = async(e)=>{
  e.preventDefault()
  dispatch({type:"LOGIN_START"});
await axios.post("http://localhost:6007/login",{
  email :email,
  password:password
}).then((res)=>{
  console.log(res.data);
  // res = JSON.stringify(res)
  dispatch({type:"LOGIN_SUCCESS", payload:res.data});
  window.location.replace("/");
}).catch((err)=>{
  console.log(err.message);
  dispatch({type:"LOGIN_FAILURE"});
  alert("wrong email or password");
})
}
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className='loginForm' onSubmit={handleSubmit}>
          <label htmlFor="" type="text">Email</label>
         <input type="text" className='loginInput' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
         <label htmlFor="" type="Password">Password</label>
        <input type="text"className='loginInput' placeholder='Enter Password'onChange={(e)=>setPassword(e.target.value)}/>
          <button className='loginButton' type='submit' value='submit'>Login</button>
        </form>

        <button className='loginRegisterButton'>
          <Link to="/register" className="link">Register</Link>
        </button>

    </div>
  )
}

export default Login;



// import axios from 'axios';
// import React, { useContext } from 'react'
// import { useRef } from 'react';
// import { Link } from 'react-router-dom'
// import {Context} from "../../context/Context"
// import "./login.css";

// function Login() {

//   const userRef = useRef();
//   const passwordRef = useRef();
//   const { dispatch, } = useContext(Context)

//   const handleSubmit = async (e)=>{
//     e.preventDefault()
//     dispatch({type:"LOGIN_START"});
//     try {
//        await axios.post("http://localhost:6007/login", {
//         email:userRef.current.value,
//         password:passwordRef.current.value,

//        }).then((res)=>{
//         console.log("this is "+res.user)
//         dispatch({type:"LOGIN_SUCCESS", payload:res.data});
//        })
      
//     } catch (error) {
//        console.log(error)
//     }
//   }
//   // console.log(user)
//   // console.log(loading);
//   return (
//     <div className='login'>
//         <span className="loginTitle">Login</span>
//         <form action="" className='loginForm' onSubmit={handleSubmit}>
//             <label htmlFor="" type="text">Email</label>
//             <input type="text" className='loginInput' placeholder='Enter Email' ref={userRef} />
//             <label htmlFor="" type="Password">Password</label>
//             <input type="text"className='loginInput' placeholder='Enter Password' ref={passwordRef}/>
//             <button className='loginButton' type='submit' value='submit'>Login</button>
//         </form>
//         <button className='loginRegisterButton'>
//           <Link to="/register" className="link">Register</Link>
//           </button>

//     </div>
//   )
// }

// export default Login;