
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import RequireAuth from './Components/Pages/Login/RequireAuth';
import Signup from './Components/Pages/Login/Signup';
import MakeAppointment from './Components/Pages/MakeAppointment/MakeAppointment';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MyAppointment from './Components/Pages/Dashboard/MyAppointment';
import MyReview from './Components/Pages/Dashboard/MyReview';
import History from './Components/Pages/Dashboard/History';
import Users from './Components/Pages/Dashboard/Users';
import RequireAdmin from './Components/Pages/Login/RequireAdmin';
import AddDoctor from './Components/Pages/Dashboard/AddDoctor';
import ManageDoctors from './Components/Pages/Dashboard/ManageDoctors';

function App() {
  return (
    <div className='max-w-7xl px-12'>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path='/appointment' element={<RequireAuth>
        <MakeAppointment/>
       </RequireAuth>}/>
       <Route path='/dashboard' element={<RequireAuth>
        <Dashboard/>
       </RequireAuth>}>
         <Route index element={<MyAppointment/>}/>
         <Route path='myreview' element={<MyReview/>}/>
         <Route path='history' element={<History/>}/>
         <Route path='users' element={<RequireAdmin><Users/></RequireAdmin>}/>
         <Route path='addDoctor' element={<RequireAdmin><AddDoctor/></RequireAdmin>}/>
         <Route path='manageDoctors' element={<RequireAdmin><ManageDoctors/></RequireAdmin>}/>
       </Route>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
