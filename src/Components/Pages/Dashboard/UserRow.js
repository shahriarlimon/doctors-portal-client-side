import React from 'react';

const UserRow = ({user,refetch}) => {
    const {email, role} = user;
    const makeAdmin = ()=>{
        fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        'authorization':`Bearer ${localStorage.getItem('AccessToken')}`
      },
    }).then(res=>{
      if(res.status === 403 || res.status ===401){
          alert('Failed to make an admin')
      }
       return res.json()
    }).then(data=>{
       if(data.modifiedCount > 0){
        refetch();
        alert('Made admin successfully')
       }
    })
    }
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{ role !=='admin'&&<button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        <td><button class="btn btn-xs">Delete User</button></td>
      </tr>
    );
};

export default UserRow;