import React, { useState } from "react";
import axios from "axios";

function AddProduct({ onAdded }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: ""
  });

  const addProduct = async () => {
    try {
      await axios.post("http://localhost:5000/api/products", {
        ...product,
        price: Number(product.price) // make sure price is number
      });
      alert("Product Added");
      setProduct({ name: "", description: "", price: "", category: "" });
      onAdded(); // refresh list
    } catch (error) {
      console.error("Error adding product:", error.response || error);
      alert("Error adding product");
    }
  };

  return (
    <div>
      <h3>Add Product</h3>
      <input placeholder="Name" value={product.name} onChange={e => setProduct({ ...product, name: e.target.value })} />
      <input placeholder="Description" value={product.description} onChange={e => setProduct({ ...product, description: e.target.value })} />
      <input placeholder="Price" type="number" value={product.price} onChange={e => setProduct({ ...product, price: e.target.value })} />
      <input placeholder="Category" value={product.category} onChange={e => setProduct({ ...product, category: e.target.value })} />
      <button onClick={addProduct}>Add</button>
    </div>
  );
}

export default AddProduct;
