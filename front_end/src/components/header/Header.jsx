import React from 'react'
import "./header.css"
function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React and Node</span>
            <span className='headerTitleLg'>Blog</span>

        </div>
        <img className='headerImg' src='https://images.pexels.com/photos/4932184/pexels-photo-4932184.jpeg?auto=compress&cs=tinysrgb&w=1500' alt=''></img>
    </div>
  )
}

export default Header