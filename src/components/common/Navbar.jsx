import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">Home</Link>

      {user?.role === "user" && (
        <Link to="/user" className="nav-item">User</Link>
      )}

      {user?.role === "admin" && (
        <Link to="/vendor" className="nav-item">Vendor</Link>
      )}

      {(user?.role === "user" || user?.role === "admin") && (
        <Link to="/cart" className="nav-item">Cart</Link>
      )}

      {user?.role === "user" && (
        <Link to="/checkout" className="nav-item">Checkout</Link>
      )}

      {!user && (
        <>
          <Link to="/signup" className="nav-item">Sign Up</Link>
          <Link to="/login" className="nav-item">Login</Link>
        </>
      )}
    </nav>
  );
}
