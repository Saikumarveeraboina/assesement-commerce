export default function ProductCard({ product }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart");
  };

  return (
    <div>
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
