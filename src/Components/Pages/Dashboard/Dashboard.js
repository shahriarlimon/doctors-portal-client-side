import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebaseConfigInit';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
  <input id="side-bar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    {/* <!-- Page content here --> */}
    <h1 className='text-4xl text-purple-500'>My appointment</h1>
    <Outlet></Outlet>
   
    
  
  </div> 
  <div class="drawer-side">
    <label for="side-bar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
     {/*  <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">My Appointments</Link></li>
      <li><Link to="/dashboard/myreview">My Review</Link></li>
      <li><Link to="/dashboard/history">History</Link></li>
      {admin && <>
        <li><Link to="/dashboard/users">Users</Link></li>
        <li><Link to="/dashboard/addDoctor">Add a doctor</Link></li>
        <li><Link to="/dashboard/manageDoctors">Manage doctors</Link></li>
      </>}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;