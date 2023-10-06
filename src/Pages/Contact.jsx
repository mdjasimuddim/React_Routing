import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h2>Contact Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, aliquid consequatur, sint laudantium assumenda non mollitia labore excepturi harum, placeat itaque consequuntur corporis natus officiis. In eos, quas nisi dolorum iure laborum magni ex nam aperiam quos. Dolores ex molestias, aut dolor itaque dignissimos quibusdam? Optio at illum facere voluptatum culpa? Voluptas nisi laudantium incidunt optio quisquam qui! Deleniti, tempora!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ullam aliquam iusto dolore excepturi ipsam commodi nisi officiis, vitae dolorem asperiores reprehenderit aliquid ex quos beatae nulla sequi! Pariatur, blanditiis.</p>
        <button onClick={() => {navigate("/")
}}>Go to Home Page</button>
    </div>
  )
}

export default Contact