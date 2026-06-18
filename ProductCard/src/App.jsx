import { useState } from "react";
import Products from "./Product";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : "light"}>
      
      {/* Navbar */}
      <nav className="navbar">
        <h2>Smart Store</h2>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </nav>

      {/* Toggle Button */}
      <button 
        className="toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      {/* Header */}
      <div className="header">
        <h2>Welcome to Smart Store</h2>
        <p>Best deals on electronics</p>
      </div>

      {/* Products */}
      <Products />

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Smart Store</p>
      </footer>
    </div>
  );
}

export default App;