import { useState, useEffect } from "react";

export default function VendorProducts() {
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
  }, []);

  const deleteProduct = (id) => {
    const updated = products.filter(p => p.id !== id);
    localStorage.setItem("products", JSON.stringify(updated));
    setProducts(updated);
  };

  const saveEdit = () => {
    const updated = products.map(p =>
      p.id === edit.id ? edit : p
    );
    localStorage.setItem("products", JSON.stringify(updated));
    setProducts(updated);
    setEdit(null);
  };

  return (
    <>
      {products.map(p => (
        <div key={p.id}>
          {p.title} - ₹{p.price}
          <button onClick={() => setEdit(p)}>Edit</button>
          <button onClick={() => deleteProduct(p.id)}>Delete</button>
        </div>
      ))}

      {edit && (
        <>
          <input value={edit.title}
            onChange={e => setEdit({ ...edit, title: e.target.value })} />
          <input value={edit.price}
            onChange={e => setEdit({ ...edit, price: e.target.value })} />
          <button onClick={saveEdit}>Save</button>
        </>
      )}
    </>
  );
}
