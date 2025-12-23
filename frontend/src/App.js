import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import UserView from "./pages/UserView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserView />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
