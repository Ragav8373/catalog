import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error(error.response || error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error(error.response || error);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  return (
    <div>
      <h3>Product List</h3>
      <ul>
        {products.map(p => (
          <li key={p._id}>
            {p.name} - ${p.price} ({p.category})
            {/* <button onClick={() => deleteProduct(p._id)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
