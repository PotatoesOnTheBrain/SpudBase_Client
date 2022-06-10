import './App.css';
import Convo from './Components/Convo';
import Login from './Components/Login';
import Profile from './Components/Profile';
import TheTeam from './Components/TheTeam';
import Bouncer from './Components/Bouncer';
import {Link, Routes, Route, Navigate} from "react-router-dom";
import { useNavigate } from 'react-router';
import { useEffect } from 'react';


function App() {

// let navigate = useNavigate();

// useEffect(() => {
// if (!document.cookie.split("=")[1]) {
//   navigate('/login')
// }
// }, [])


  return (
    <div className="App">
      <header>
        <nav>
          <h1 className="Spudbase">SpudBase</h1>
          <h3 className="Developers"> — Developers Welcome</h3>
          <ul>
            <li>
              <Link to="/login"> Login </Link>
              <Link to="/profile"> Profile </Link>
              <Link to="/theteam"> The Team </Link>
              <Link to="/convo"> Convos </Link>
            </li>
          </ul>
        </nav>
      </header>


      <Routes>
        <Route path="/" element={document.cookie.split("=")[1] ? <Navigate to="/profile"/> : <Navigate to="/login"/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/theteam" element={<TheTeam/>}/>
        <Route path="/convo" element={<Convo/>}/>
        <Route path ="/bouncer" element={<Bouncer/>}/>
      </Routes>
    </div>
  );
}

export default App;
