import { useState } from "react";
import SareeCard from "./SareeCard.jsx";

function App() {
  const sarees = [
    {
      id: 1,
      name: "Cotton Saree",
      category: "Daily Wear",
      fabric: "Pure Cotton",
      meters: "6 meters",
      rating: 4.5,
      buyers: 8500,
      price: 1499,
      trend: "🔥 Trending",
      isTrending: true,
      link: "https://www.myntra.com/cotton-sarees",
    },

    {
      id: 2,
      name: "Pattu Saree",
      category: "Traditional Wear",
      fabric: "Silk",
      meters: "6.3 meters",
      rating: 4.9,
      buyers: 12000,
      price: 5999,
      trend: "⭐ Best Seller",
      isTrending: true,
      link: "https://www.amazon.in/pattu-sarees",
    },

    {
      id: 3,
      name: "Semi Pattu Saree",
      category: "Festival Wear",
      fabric: "Semi Silk",
      meters: "6.2 meters",
      rating: 4.7,
      buyers: 9200,
      price: 2999,
      trend: "💖 Most Loved",
      isTrending: false,
      link: "https://www.flipkart.com/semi-pattu-sarees",
    },

    {
      id: 4,
      name: "Banarasi Saree",
      category: "Wedding Wear",
      fabric: "Banarasi Silk",
      meters: "6.5 meters",
      rating: 4.8,
      buyers: 11000,
      price: 4999,
      trend: "👑 Bridal Trend",
      isTrending: true,
      link: "https://www.ajio.com/banarasi-sarees",
    },

    {
      id: 5,
      name: "Organza Saree",
      category: "Party Wear",
      fabric: "Soft Organza",
      meters: "5.8 meters",
      rating: 4.6,
      buyers: 7600,
      price: 2499,
      trend: "✨ Instagram Trend",
      isTrending: false,
      link: "https://www.myntra.com/organza-sarees",
    },

    {
      id: 6,
      name: "Net Saree",
      category: "Designer Wear",
      fabric: "Net Fabric",
      meters: "6 meters",
      rating: 4.4,
      buyers: 6300,
      price: 1999,
      trend: "💫 Stylish Pick",
      isTrending: false,
      link: "https://www.amazon.in/net-sarees",
    },

    {
      id: 7,
      name: "Silk Saree",
      category: "Traditional Collection",
      fabric: "Pure Silk",
      meters: "6.4 meters",
      rating: 4.9,
      buyers: 14000,
      price: 6999,
      trend: "🔥 Top Trending",
      isTrending: true,
      link: "https://www.flipkart.com/silk-sarees",
    },
  ];

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [preview, setPreview] = useState({
    name: "",
    category: "",
  });

  const [error, setError] = useState("");

  function handlePreview(e) {
    e.preventDefault();

    if (productName.trim() === "" || category.trim() === "") {
      setError("Please enter both fields");
      return;
    }

    setPreview({
      name: productName,
      category: category,
    });

    setError("");
  }

  return (
    <div>
      <header className="header">
        <h1>SareeVerse</h1>

        <p>
          Explore trending saree collections with ratings, fabric details and
          shopping links
        </p>
      </header>

      <section className="form-section">
        <h2>Saree Preview Form</h2>

        <form onSubmit={handlePreview}>
          <input
            type="text"
            placeholder="Enter Saree Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <button type="submit">Show Preview</button>
        </form>

        <p className="error">{error}</p>

        <div className="preview-box">
          <h3>Live Preview</h3>

          <p>
            <b>Saree Name:</b> {preview.name}
          </p>

          <p>
            <b>Category:</b> {preview.category}
          </p>
        </div>
      </section>

      <section className="saree-section">
        <h2>Trending Saree Collection</h2>

        <div className="saree-container">
          {sarees.map((saree) => (
            <SareeCard key={saree.id} saree={saree} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;