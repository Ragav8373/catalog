import React, { useState } from "react";
import axios from "axios";

function EditProduct({ product, refresh }) {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(product);
  const token = localStorage.getItem("token");

  const updateProduct = async () => {
    await axios.put(
      `http://localhost:5000/api/products/${product._id}`,
      data,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setEdit(false);
    refresh();
  };

  return (
    <>
      {edit ? (
        <>
          <input value={data.name} onChange={e => setData({...data, name: e.target.value})} />
          <input value={data.price} onChange={e => setData({...data, price: e.target.value})} />
          <button onClick={updateProduct}>Save</button>
        </>
      ) : (
        <button onClick={() => setEdit(true)}>Edit</button>
      )}
    </>
  );
}

export default EditProduct;
