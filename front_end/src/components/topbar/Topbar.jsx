

import React from 'react'

import { Link } from 'react-router-dom';

import "./topbar.css"
function Topbar() {



   const user = JSON.parse(localStorage.getItem("user"));
   
   const handleLogout =()=>{
    localStorage.setItem("user", null)

    window.location.replace("/");
 }
 

  return (
    <>
    <div  className='top'>
        <div className='topLeft'>
        <i className="TopIcon fa-brands fa-facebook"></i>
        <i className="TopIcon fa-brands fa-twitter"></i>
        <i className="TopIcon fa-brands fa-square-instagram"></i>
        <i className="TopIcon fa-brands fa-pinterest"></i>
        </div>
        <div className='topMiddle'>
            <div className='topList'>
            <Link to="/"  className='link'><p className='topListItem'>HOME</p></Link>
             <Link to="/about" className='link'> <p className='topListItem'>ABOUT</p></Link>
              <Link to="/contact" className='link'> <p className='topListItem'>CONTACT</p></Link> 
              <Link to="/write" className='link'><p className='topListItem'>WRITE</p></Link>  
            <p className='topListItem' >
              {user !== null && <button className='topListItem' onClick={handleLogout}>LOGOUT</button> }</p>
            </div>
        </div>

        <div className='topRight'>
          {
            user?(
              <img className='topImg' src={user.profilePic} alt="" />
            ):( <>
             <ul className='topList'>
            <Link className='link' to="/login"><p className='topListItem'>LOGIN</p></Link>
            <Link className='link' to="/register"><p className='topListItem'>REGISTER</p> </Link>
            </ul>
             </>
            )
          }
          
        <i className="TopSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>  
    </div>
    </> 
  )
}

export default Topbar;



//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06LbbruxnVgWUGapYU6AGd_bCDVBkqVCFQQ&usqp=CAU