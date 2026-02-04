import { Link } from "react-router-dom";
import './style.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">Home</Link> 
      <Link to="/signup" className="nav-item">Sign Up</Link>
       <Link to="/login" className="nav-item">Login</Link>
    </nav>
  );
}
