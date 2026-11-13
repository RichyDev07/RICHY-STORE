import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login.jsx";
import Dashboard from "./dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;