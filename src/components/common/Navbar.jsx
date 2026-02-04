import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
    <nav className="navbar">
      <Link to="/" className="nav-item">Home</Link>
          <Link to="/cart" className="nav-item">Cart</Link>
          <Link to="/checkout" className="nav-item">Checkout</Link>

        <Link to="/vendor" className="nav-item">Vendor ></Link>
          <Link to="/signup" className="nav-item">Sign Up</Link>
          <Link to="/login" className="nav-item">Login</Link>
    </nav>
    </>
  );
}
