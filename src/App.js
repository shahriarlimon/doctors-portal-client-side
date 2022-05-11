
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import MakeAppointment from './Components/Pages/MakeAppointment/MakeAppointment';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl px-12'>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path='/appointment' element={<MakeAppointment/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
