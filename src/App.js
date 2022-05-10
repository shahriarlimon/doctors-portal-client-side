
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
