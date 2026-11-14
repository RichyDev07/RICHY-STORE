
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  // Get the selected product from localStorage
  const savedProduct = localStorage.getItem("selectedProduct");

  const product = savedProduct
    ? JSON.parse(savedProduct)
    : null;

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Mobile Money");

  const handleOrder = (e) => {
    e.preventDefault();

    if (!product) {
      alert("No product has been selected.");
      navigate("/Products");
      return;
    }

    // Demonstration only: no order or payment is processed.
    alert(
      "Checkout form completed! Payment processing will be connected later."
    );
  };

  if (!product) {
    return (
      <div className="checkout-page">
        <h2>No product selected</h2>
        <button onClick={() => navigate("/Products")}>
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      <header className="checkout-header">
        <h2>RICHY STORE</h2>
        <span>Secure Checkout</span>
      </header>

      <div className="checkout-container">

        <div className="checkout-form-section">
          <h1>Checkout</h1>
          <p>Enter your delivery and payment details.</p>

          <form onSubmit={handleOrder}>

            <h3>Customer Information</h3>

            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label>Delivery Address</label>
            <textarea
              placeholder="Enter your delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

            <h3>Payment Method</h3>

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="Mobile Money">Mobile Money</option>
              <option value="Card">Debit / Credit Card</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>

          </form>
        </div>

        <div className="order-summary">
          <h2>Your Order</h2>

          <img
            src={product.image}
            alt={product.name}
          />

          <h3>{product.name}</h3>

          <p>Category: {product.category}</p>

          <div className="summary-row">
            <span>Product Price</span>
            <strong>
              GH₵ {Number(product.price).toLocaleString()}
            </strong>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <strong>
              GH₵ {Number(product.price).toLocaleString()}
            </strong>
          </div>

          <p className="checkout-note">
            Delivery fees, if any, will be confirmed before payment.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
