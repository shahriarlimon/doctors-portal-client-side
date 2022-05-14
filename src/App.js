
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import RequireAuth from './Components/Pages/Login/RequireAuth';
import Signup from './Components/Pages/Login/Signup';
import MakeAppointment from './Components/Pages/MakeAppointment/MakeAppointment';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl px-12'>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path='/appointment' element={<RequireAuth>
        <MakeAppointment/>
       </RequireAuth>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
