import React, { useState, useEffect } from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/ec-frontend/login" element={<Login />} />
          <Route path="/ec-frontend/register" element={<Register />} />
          {isAuthenticated ? (
            <>
              <Route path="/ec-frontend/products" element={<ProductList />} />
              <Route path="/ec-frontend/" element={<Navigate to="/ec-frontend/products" replace />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/ec-frontend/login" replace />} />
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
