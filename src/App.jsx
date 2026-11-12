import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Show Login at the root URL */}
        <Route path="/" element={<Login />} />

        {/* Also allow /Login */}
        <Route path="/Login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;