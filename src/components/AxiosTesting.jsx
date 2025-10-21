import React, { useState } from 'react'

const AxiosTesting = () => {
    const [post, setpost] = useState([])
    const [loading, setloading] = useState(true)

    const fetchdata = async() =>{
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setpost(res.data)
        } catch (error) {
            setloading
        }finally{
            setloading(false)
        }
    }
  return (
    <div>
        {loading ? <h1>Loading...</h1> : post.map((row, i) =>{
            <div key={i}>
                <h3>{row.title}</h3>
                <p>{row.body}</p>
            </div>
        })}
    </div>
  )
}

export default AxiosTesting