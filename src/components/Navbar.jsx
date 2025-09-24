import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const navigate = useNavigate();
  const {isAuthenticated, logout, loading} = useAuth();

  const handleLogout = ()=>{
    logout();
    navigate('/login');
  }

  if(loading) return null;
  return (
    <nav className="navbar">
      <h1>Recipify</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create</Link></li>
        <li><Link to="/your-recipes">Your Recipes</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        {
          isAuthenticated? (<li><Link><button onClick={handleLogout}>Logout</button></Link></li>) : (<></>)
        }
      </ul>
    </nav>
  );
}

export default Navbar;
