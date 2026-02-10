import React, {useState, useEffect} from 'react'

function UserData() {
    const[UserData,SetUserData]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.jason())
        .then((data)=> SetUserData(data));

    })
  return (
    <div>
    <h1>UserData-Fetch API</h1>
      <table border="2">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {UserData.map((Details)=>(
                <tr key={Details.id}>
                <td>{Details.id}</td>
                <td>{Details.name}</td>
                <td>{Details.email}</td>

                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default userdata
