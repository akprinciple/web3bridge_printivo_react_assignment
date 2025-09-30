import React, { use, useEffect, useState } from 'react'

const Schoolhomepage = () => {
    const [username, setusername] = useState("");
    const [userclass, setuserclass] = useState("");
    const [userage, setuserage] = useState("");
    const [AllUSer, setAllUSer] = useState([])
       
    function handleSubmit(event) {
        event.preventDefault();
        let storedUser = localStorage.getItem("user");
         let userData = storedUser ? JSON.parse(storedUser) : [];
         if(username === "" || userclass === "" || userage === ""){
            return alert("Please fill all the fields")
         }
        userData.push({username, userclass, userage});
         localStorage.setItem("user", JSON.stringify(userData));
        showResult()
        }
        function showResult(params) {
            let storedUser = localStorage.getItem("user");
         let userData = storedUser ? JSON.parse(storedUser) : [];
            setAllUSer(userData)
        }
        useEffect(() => {
            showResult()
        }, [])
        
        function deleteHandler(i) {
            let storedUser = localStorage.getItem("user");
         let userData = storedUser ? JSON.parse(storedUser) : [];
            userData.splice(i, 1);
            localStorage.setItem("user", JSON.stringify(userData));
            showResult()
        }     

  return (
    <div>
        <h1 className='text-center mt-5 font-bold text-2xl'>Add New Student</h1>
        <div className='w-3/5  mx-auto mb-15 p-20 rounded-4xl shadow-lg bg-gray-200'>
            <label htmlFor="">Name</label>
            <input type="text" id='username' onChange={(e) => setusername(e.target.value)} className='w-full px-3 py-2 border border-blue-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your Name' />
            <label htmlFor="">Class</label>
            <input type="text" id='userclass' onChange={(e) => setuserclass(e.target.value)}  className='w-full px-3 py-2 border border-blue-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your Class' />
            <label htmlFor="">Age</label>
            <input type="number" id='age' onChange={(e) => setuserage(e.target.value)}  className='w-full px-3 py-2 border border-blue-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your Age' />
            <button className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleSubmit}>Submit</button>
        </div>

        <h3 className='text-center text-2xl font-bold'>All Users</h3>
        <table className='table-auto border-collapse w-4/5 mx-auto my-5'>
            <thead className='bg-blue-500 text-white'>
                <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    AllUSer?.map(({username, userclass, userage}, i)=>{
                        return (
                            <tr key={i} className='p-3 border-b hover:bg-gray-200 text-center'>
                                <td>{i+1}</td>
                                <td>{username}</td>
                                <td>{userclass}</td>
                                <td>{userage}</td>
                                <td><button className='bg-red-500 hover:bg-red-700 text-white my-2 font-bold py-2 px-4 rounded' onClick={() => deleteHandler(i)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Schoolhomepage