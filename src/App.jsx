
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page imports
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import Dashboard from "./dashboard.jsx";
import Products from "./Products.jsx";
import CustomerDashboard from "./CustomerDashboard.jsx";
import Checkout from "./Checkout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Customer Homepage */}
        <Route path="/" element={<CustomerDashboard />} />

        {/* Customer Login */}
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />

        {/* Customer Products */}
        <Route path="/Products" element={<Products />} />

        {/* Customer Checkout */}
        <Route path="/Checkout" element={<Checkout />} />

        {/* Admin Dashboard */}
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Products" element={<Products />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
