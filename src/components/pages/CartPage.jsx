import { Link } from "react-router-dom";
import Footer from "../common/Footer";

export default function CartPage() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <>
      <h3 className="text-center">Here is your Cart Page </h3>

      {cart.length === 0 && <p>Your Cart is empty</p>}

      {cart.map((c, i) => (
        <div key={i} className="cart-item">
          {c.title} - ₹{c.price}
        </div>
      ))}

      {cart.length > 0 && (
        <Link to="/checkout" className="btn2">
          Hey ! Proceed to Checkout
        </Link>
      )}
        <Footer />
    </>
  );
}
