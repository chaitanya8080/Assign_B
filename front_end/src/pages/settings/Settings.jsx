
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./settings.css"
function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form className='settingsForm'>
              <label htmlFor="">Profile Picture</label>
               <div className="settingsPP">
                <img src="https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="settingsImg" />
             

              <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
              </label>
              <input type="file" id="finalInput" style={{display:"none"}}></input>
              </div>
              <label htmlFor="">Username</label>
              <input type="text" placeholder='name' />
              <label htmlFor="">Email</label>
              <input type="email" placeholder='name@email.com' />
              <label htmlFor="">Password</label>
              <input type="password" placeholder='name' />
              <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Settings