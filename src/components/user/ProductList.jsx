export default function ProductList() {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  return (
    <>
      {products.map(p => (
        <div key={p.id}>
          {p.title} - ₹{p.price}
          <button onClick={() => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(p);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Added to cart");
          }}>
            Add to Cart
          </button>
        </div>
      ))}
    </>
  );
}
