
import React, { useState } from "react";
import "./CustomerDashboard.css";

function CustomerDashboard() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Apple Phones",
      price: 5500,
      image: "/Iphone/iphone 15.jpg"
    },
    {
      id: 2,
      name: "Samsung S24",
      category: "Samsung Phones",
      price: 7000,
      image: "/images/samsung-s24.jpg"
    },
    {
      id: 3,
      name: "AirPods Pro",
      category: "Accessories",
      price: 1200,
      image: "/images/airpods.jpg"
    },
    {
      id: 4,
      name: "Phone Cover",
      category: "Accessories",
      price: 150,
      image: "/images/phone-cover.jpg"
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="customer-dashboard">

      <header className="shop-header">
        <h2>RICHY STORE</h2>

        <input
          type="text"
          placeholder="Search for phones and accessories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="cart-count">
          🛒 Cart ({cart.length})
        </div>
      </header>

      <section className="shop-banner">
        <h1>Welcome to RICHY STORE</h1>
        <p>Discover quality phones and accessories at great prices.</p>
      </section>

      <section className="shop-products">
        <h2>Our Products</h2>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="shop-product-card" key={product.id}>

              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>
              <p>{product.category}</p>

              <h4>
                GH₵ {product.price.toLocaleString()}
              </h4>

              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>

              <button
  className="buy-button"
  onClick={() => {
    localStorage.setItem(
      "selectedProduct",
      JSON.stringify(product)
    );

    window.location.href = "/Login";
  }}
>
  Buy Now
</button>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default CustomerDashboard;
