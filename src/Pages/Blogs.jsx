import React, { useState } from 'react'

import { blogData } from '../data'
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogData);

    const truncateString =(str, num) => {
        if(str.length > num){
            return str.slice(0, num) + '...';
        }else{
            return str;
        }
    }


  return (
    <div>
        <h2>Blogs Page</h2>
        <section>
        {blogs.map((blog) => {
            const {id, title, desc} = blog;
            return <article key={id}>
                <h3>{title}</h3>
                <p>{truncateString(desc, 100)}</p>
                <Link to = {title} state ={{id, title, desc}}>Learn More</Link>
            </article>
        })}

        </section>
    </div>
  )
}

export default Blogs