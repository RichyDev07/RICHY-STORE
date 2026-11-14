
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const location = useLocation();

  const activePage =
    location.pathname.split("/").pop() || "Dashboard";

  const menuItems = [
    { name: "Dashboard", icon: "▦" },
    { name: "Products", icon: "▣" },
    { name: "Orders", icon: "🛒" },
    { name: "Customers", icon: "♙" },
    { name: "Analytics", icon: "▤" },
    { name: "Settings", icon: "⚙" },
  ];

  const stats = [
    { title: "Total Sales", value: "GH₵ 25,450", change: "+12.5%" },
    { title: "Total Orders", value: "156", change: "+8.2%" },
    { title: "Total Products", value: "85", change: "+5.4%" },
    { title: "Total Customers", value: "120", change: "+10.1%" },
  ];

  const orders = [
    { id: "#RS001", customer: "John Mensah", product: "iPhone 13", amount: "GH₵ 5,500", status: "Completed" },
    { id: "#RS002", customer: "Ama Serwaa", product: "AirPods Pro", amount: "GH₵ 1,200", status: "Pending" },
    { id: "#RS003", customer: "Kwame Boateng", product: "Samsung S24", amount: "GH₵ 7,000", status: "Completed" },
    { id: "#RS004", customer: "Akosua Mary", product: "Phone Cover", amount: "GH₵ 150", status: "Processing" },
  ];

  return (
    <div className="store-dashboard">

      <aside className="sidebar">
        <div className="brand">
          <h2>RICHY<span>STORE</span></h2>
          <p>ADMIN PANEL</p>
        </div>

        <p className="menu-heading">MAIN MENU</p>
<nav>
  {menuItems.map((item) => (
    <Link
      key={item.name}
      to={
        item.name === "Dashboard"
          ? "/Dashboard"
          : `/Dashboard/${item.name}`
      }
      className={
        activePage.toLowerCase() === item.name.toLowerCase()
          ? "menu-item active"
          : "menu-item"
      }
    >
      <span>{item.icon}</span>
      {item.name}
    </Link>
  ))}
</nav>

        <div className="sidebar-bottom">
          <div className="admin-avatar">R</div>
          <div>
            <h4>Richmond</h4>
            <p>Store Administrator</p>
          </div>
        </div>
      </aside>

      <main className="dashboard-main">

        <header className="topbar">
          <div>
            <h2>{activePage}</h2>
            <p>Welcome back! Here's what's happening in your store.</p>
          </div>

          <div className="topbar-right">
            <span className="notification">♧</span>
            <div className="profile">R</div>
          </div>
        </header>

        {activePage.toLowerCase() === "dashboard" ? (
          <>
            <section className="welcome-banner">
              <div>
                <h1>Welcome to RICHY STORE</h1>
                <p>
                  Manage your products, sales and customers in one place.
                </p>
              </div>
              <span className="banner-icon">🛍️</span>
            </section>

            <section className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.title}>
                  <p>{stat.title}</p>
                  <h2>{stat.value}</h2>
                  <span>{stat.change} from last month</span>
                </div>
              ))}
            </section>

            <section className="orders-section">
              <div className="section-header">
                <h2>Recent Orders</h2>
                <Link to="/Dashboard/Orders">View All</Link>
              </div>

              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Product</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.product}</td>
                        <td>{order.amount}</td>
                        <td>
                          <span className={`status ${order.status.toLowerCase()}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        ) : (
          <Outlet />
        )}

        <footer>
          © 2026 RICHY STORE. All rights reserved.
        </footer>

      </main>
    </div>
  );
}

export default Dashboard;
