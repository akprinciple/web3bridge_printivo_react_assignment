import React, { use, useState } from 'react'

const Schoolhomepage = () => {
    const [username, setusername] = useState("");
    const [userclass, setuserclass] = useState("");
    const [userage, setuserage] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        let storedUser = localStorage.getItem("user");
         let userData = storedUser ? JSON.parse(storedUser) : [];
        userData.push({username, userclass, userage});

        $new = localStorage.setItem("user", JSON.stringify(userData));
        console.log($new);
        }

  return (
    <div>
        <h1 className='text-center'>Schoolhomepage</h1>
        <div className='w-1/2 mx-auto my-15 p-20 rounded-4xl shadow-lg bg-gray-300'>
            <label htmlFor="">Name</label>
            <input type="text" id='username' onChange={(e) => setusername(e.target.value)} className='w-full px-3 py-2 border border-blue-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your Name' />
            <label htmlFor="">Class</label>
            <input type="text" id='userclass' onChange={(e) => setuserclass(e.target.value)}  className='w-full px-3 py-2 border border-blue-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your Class' />
            <label htmlFor="">Age</label>
            <input type="number" id='age' onChange={(e) => setuserage(e.target.value)}  className='w-full px-3 py-2 border border-blue-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your Age' />
            <button className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Schoolhomepage