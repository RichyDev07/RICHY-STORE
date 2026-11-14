
import React, { useState } from "react";
import "./Product.css";

function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 13",
      category: "Apple Phones",
      price: "GH₵ 5,500",
      stock: 10,
      image: "/Iphones/iphone 15.jpg"
    },
    {
      id: 2,
      name: "Samsung S24",
      category: "Android Phones",
      price: "GH₵ 7,000",
      stock: 8,
      image: "/samsung/Samsung S24.jpg"
    },
    {
      id: 3,
      name: "AirPods Pro",
      category: "Accessories",
      price: "GH₵ 1,200",
      stock: 15,
      image: "/images/airpods.jpg"
    },
    {
      id: 4,
      name: "Phone Cover",
      category: "Phone Accessories",
      price: "GH₵ 150",
      stock: 25,
      image: "/images/phone-cover.jpg"
    }
  ]);

  function addProduct() {
    const name = prompt("Enter product name:");
    if (!name) return;

    const category = prompt("Enter product category:");
    if (!category) return;

    const price = prompt("Enter product price (e.g. GH₵ 500):");
    if (!price) return;

    const stock = Number(prompt("Enter stock quantity:"));
    if (!Number.isInteger(stock) || stock < 0) {
      alert("Enter a valid stock quantity.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      category,
      price,
      stock,
      image: "/images/phone-cover.jpg"
    };

    setProducts([...products, newProduct]);
  }

  function editProduct(id) {
    const product = products.find((item) => item.id === id);
    if (!product) return;

    const name = prompt("Edit product name:", product.name);
    if (name === null || !name.trim()) return;

    const price = prompt("Edit product price:", product.price);
    if (price === null || !price.trim()) return;

    const stock = Number(prompt("Edit stock quantity:", product.stock));
    if (!Number.isInteger(stock) || stock < 0) {
      alert("Enter a valid stock quantity.");
      return;
    }

    setProducts(products.map((item) =>
      item.id === id
        ? { ...item, name, price, stock }
        : item
    ));
  }

  function deleteProduct(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      setProducts(products.filter((item) => item.id !== id));
    }
  }

  return (
    <div className="products-page">

      <div className="products-header">
        <div>
          <h1>My Products</h1>
          <p>Manage your phones and accessories.</p>
        </div>

        <button className="add-product" onClick={addProduct}>
          + Add Product
        </button>
      </div>

      <div className="products-grid">

        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
            />

            <div className="product-info">

              <span className="product-category">
                {product.category}
              </span>

              <h3>{product.name}</h3>

              <h2>{product.price}</h2>

              <p>Stock: {product.stock}</p>

              <div className="product-actions">
                <button onClick={() => editProduct(product.id)}>
                  Edit
                </button>

                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;
