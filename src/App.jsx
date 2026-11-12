import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Import Login component here
import Login from "./Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Display Login component */}
        <Route path="/Login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;