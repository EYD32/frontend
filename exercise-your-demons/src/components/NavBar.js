import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav id='nav-bar'>
      <Link to='/'>Home</Link>
      <Link to='login'>Login</Link>
      <Link to='user/:id'>Profile</Link>
      <Link to='register'>Signup</Link>
      <Link to='logout'>Logout</Link>
    </nav>
  );
}
