import React, { useState } from "react";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";

function AdminDashboard() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <AddProduct onAdded={() => setRefresh(!refresh)} />
      <ProductList key={refresh} />
    </div>
  );
}

export default AdminDashboard;
