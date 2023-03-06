// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Register from './components/Register';
import MacrosTracker from './components/MacrosTracker';
import Logout from './components/Logout';

function App() {
  return (
    <div className='App'>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='landing' element={<Profile />} />
        <Route path='login' element={<Logout />} />
        <Route path='register' element={<Register />} />
        <Route path='tracker' element={<MacrosTracker/>}/>
      </Routes>
    </div>
  );
}

export default App;
