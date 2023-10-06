import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {
    // const {title} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({name : name, age: age})
    }
  return (
    <div>
        <h1>User</h1>
        {/* <h1>{searchParams.get("id")}</h1>
        <h1>{searchParams.get("age")}</h1>
        <h1>{searchParams.get("name")}</h1> */}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' value = {name} onChange={(e) => setName(e.target.value)} />
            <br />
            <input type="text" placeholder='Age' value = {age} onChange={(e) => setAge(e.target.value)} />
            <button type='submit'>Click</button>
        </form>

    </div>
  )
}

export default User