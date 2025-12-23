import React from "react";
import ProductList from "../components/ProductList";
import "./user.css"; // Import CSS

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Product Catalog</h1>
      <div>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      &copy; 2025 FlyWebCreations. All rights reserved.
    </footer>
  );
};

function UserView() {
  return (
    <div>
      <Navbar />
      
      <div className="container">
        <h2>User Product View</h2>
        <ProductList isAdmin={false} />
      </div>
      
      <Footer />
    </div>
  );
}

export default UserView;
