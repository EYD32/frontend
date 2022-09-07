import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Register from './components/Register'

function App() {
  return (
    <div className='App'>
      <header><NavBar/></header>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='landing' element={<Landing/>}/>
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
