import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosTesting = () => {
    const [post, setpost] = useState([])
    const [loading, setloading] = useState(true)

    const fetchdata = async() =>{
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(res.data);
            
            setpost(res.data)
        } catch (error) {
            setloading(false)
            console.log('Error fetching data', error);
        }finally{
            setloading(false)
        }
    }
    useEffect(() =>{
        fetchdata()
    }, [])
  return (
    <div>
        {loading ? <h1 className='text-center'>Loading...</h1> : ''}
        <div className='flex flex-wrap justify-between'>

        { post?.map((row, i)  =>(
            <div key={i} className='p-3 w-1/3'>
                <h1 className='text-2xl'>{row.title}</h1>
                <p>{row.body}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default AxiosTesting