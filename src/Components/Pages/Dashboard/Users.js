import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { isLoading, error, data:users,refetch } = useQuery('users', () =>
    fetch(`http://localhost:5000/users`,{
        method:'GET',
        headers:{
          'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
        }
    }).then(res =>
      res.json()
    )
  )
 
  if(isLoading){
    return <Loading/>
  }
    return (
        <div>
            <h1>Total users:{users.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     {
         users?.map(user=><UserRow refetch={refetch}  user={user}/>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;