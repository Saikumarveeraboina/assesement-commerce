import { useState } from "react";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    const products = JSON.parse(localStorage.getItem("products")) || [];

    products.push({
      id: Date.now(),
      title,
      price,
    });

    localStorage.setItem("products", JSON.stringify(products));
    alert("Product Added");
  };

  return (
    <div className="container">
      <h3>Add Product</h3>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <button onClick={addProduct}>Add</button>
    </div>
  );
}
