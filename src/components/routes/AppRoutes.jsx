import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UserDashboard from "../pages/UserDashboard";
import VendorDashboard from "../pages/VendorDashboard.jsx";
import CartPage from "../pages/CartPage";
import Checkout from "../pages/Checkout";
 import Login from "../pages/Login.jsx"; 
import Signup from "../pages/SignUp.jsx";  
import ProtectedRoute from "./ProtectedRoute.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <ProtectedRoute path="/user" element={<UserDashboard />} />
      <ProtectedRoute path="/vendor" element={<VendorDashboard />} />
      <ProtectedRoute path="/cart" element={<CartPage />} />
      <ProtectedRoute path="/checkout" element={<Checkout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  );
}
