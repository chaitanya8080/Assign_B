

import React, { useState,useEffect } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.css"
import axios from "axios";
import { useLocation } from 'react-router-dom'

function Home() {
const [posts , setPosts] = useState([]);
const {search} = useLocation()
// console.log("search"+search)

useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get(`http://localhost:6007/products`+search)
      setPosts(res.data)
    }
    fetchPosts()
},[search])

// console.log(posts)
  return (
    <>
    <Header></Header>
    <div className='home'>    
        <Posts posts={posts}></Posts>
        <Sidebar></Sidebar>
    </div></>
   
  )
}

export default Home