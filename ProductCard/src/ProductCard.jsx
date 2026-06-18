import { useState } from "react";

function ProductCard({ product }) {
  const [price, setPrice] = useState(product.price);
  const [isWishlist, setWishlist] = useState(false);
  const [msg, setMsg] = useState("");

  // Discount
  function applyDiscount() {
    const newPrice = price - (price * product.discount) / 100;
    setPrice(Math.round(newPrice));
    setMsg("Discount applied");
  }

  // Wishlist toggle
  function toggleWishlist() {
    setWishlist(!isWishlist);

    if (!isWishlist) {
      setMsg("Added to Wishlist");
    } else {
      setMsg("Removed from Wishlist");
    }
  }

  return (
    <div className="card">
      <img src={product.img} alt={product.name} />

      <h3>{product.name}</h3>
      <p>₹{price}</p>

      <p>{"⭐".repeat(product.rating)}</p>

      <button onClick={applyDiscount}>
        Claim {product.discount}% Discount
      </button>

      <button onClick={toggleWishlist}>
        {isWishlist ? "❤️" : "🤍"}
      </button>

      <button onClick={() => setMsg("Added to Cart")}>
        Add to Cart
      </button>

      <p className="msg">{msg}</p>
    </div>
  );
}

export default ProductCard;