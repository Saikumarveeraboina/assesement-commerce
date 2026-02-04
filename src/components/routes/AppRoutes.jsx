import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UserDashboard from "../pages/UserDashboard";
import VendorDashboard from "../pages/VendorDashboard";
import CartPage from "../pages/CartPage";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/user"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <VendorDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute allowedRoles={["user", "admin"]}>
            <CartPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute allowedRoles={["user", "admin"]}>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
