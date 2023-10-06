import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { blogData } from '../data';

const Blog = () => {
    const {title} = useParams();
    const [bodyData, setBodyData] = useState('');
    const location = useLocation();
    // console.log(location)

    // useEffect(() => {
    //     const blogsData = blogData.filter((blog) => blog.title === title)
    //     setBodyData(blogsData[0].desc)
    // }, [])
  return (
    <div>
        <h1>{title} Page</h1>
        <p>{location.state.desc.slice(0, 500)}</p>
        <p>{location.state.desc.slice(501, 1000)}</p>
    </div>
  )
}

export default Blog