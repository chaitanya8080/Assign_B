

import React from 'react'
import { Link } from 'react-router-dom'
import "./post.css"
function Post({post}) {
  // const PF = "http://localhost:6007/images/"
  return (
    <div className='post'>
     <Link className='link' to={`/post/${post._id}`}>{post.photo && (<img className='postImage' src={`http://localhost:6007/images/${post.photo}`} alt="" />)} </Link>
      
        <div className="postInfo">
            <div className="postCats">
              {post.categories.map((c)=>(
                <span className='postCat'>{c}</span>
              ))}
            </div>
            <Link className='link' to={`/post/${post._id}`}><span className="postTitle">
                {post.title}
            </span></Link>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='postDesc'>
          {post.desc}
        </p>
    </div>
  )
}

export default Post