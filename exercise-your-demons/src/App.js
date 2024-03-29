// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Register from './components/Register';
import MacroTracker from './components/MacroTracker';
import Logout from './components/Logout';

function App() {
  return (
    <div className='App'>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='user/:user_id' element={<Profile />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
