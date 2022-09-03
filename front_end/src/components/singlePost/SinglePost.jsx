
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./singlePost.css"
function SinglePost() {

const location = useLocation()

const path = location.pathname.split("/")[2];

const [post , setPost] = useState({});
useEffect(()=>{
  const getPost = async ()=>{
    const res = await axios.get(`http://localhost:6007/products/${path}`);
     setPost(res.data.product)
  }
  getPost()
},[path])

// console.log(post)
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={`http://localhost:6007/images/${post.photo}`} alt="" className="singlePostImg" />
            <h1 className='singlePostTitle'>
                {post.title}
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: 
                <Link to={`/?username=${post.username}`} className='link'><p >{post.username}</p></Link></span>
                <span className="singlePostDate">post : <b>{new Date(post.createdAt).toDateString()}</b></span>
            </div>
            <p className='singlePostDesc'>
                  {post.desc}
                </p>
        </div>
    </div>
  )
}

export default SinglePost