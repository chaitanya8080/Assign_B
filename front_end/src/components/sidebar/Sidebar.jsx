
import "./sidebar.css"

import React, { useState , useEffect} from 'react'
import axios from "axios"
import { Link, useLocation } from "react-router-dom"

function Sidebar() {

  const [cats, setCats] = useState([])
  const {search} = useLocation()
  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("http://localhost:6007/category"+search)
      // console.log(res.data);
      setCats(res.data);
    }
    getCats()
  },[search])
  // console.log(cats);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06LbbruxnVgWUGapYU6AGd_bCDVBkqVCFQQ&usqp=CAU" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore recusandae sit provident beatae aliquid pariatur 
                reprehenderit numquam iste maiores amet.</p>
        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c)=>(
             <Link to={`/?category=${c.name}`} className="link">
            <li className="sidebarListItem" key={c._id}>{c.name}</li>
             </Link>
          ))}
           
        </ul>

        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow us</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
             <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>

        </div>
    </div>
  )
}

export default Sidebar;