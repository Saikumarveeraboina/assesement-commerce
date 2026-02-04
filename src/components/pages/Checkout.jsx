export default function Checkout() {
  const placeOrder = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem("orders", JSON.stringify(cart));
    localStorage.removeItem("cart");
    alert("Order placed");
  };

  return <button onClick={placeOrder}>Checkout / Order </button>;
}
