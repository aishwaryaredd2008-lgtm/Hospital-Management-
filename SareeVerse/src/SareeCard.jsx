function SareeCard({ saree }) {
  return (
    <div className={saree.isTrending ? "card trending-card" : "card"}>
      <h2>{saree.name}</h2>

      <p className="trend">{saree.trend}</p>

      <p>
        <b>Category:</b> {saree.category}
      </p>

      <p>
        <b>Fabric:</b> {saree.fabric}
      </p>

      <p>
        <b>Length:</b> {saree.meters}
      </p>

      <p>
        <b>Rating:</b> ⭐ {saree.rating}/5
      </p>

      <p>
        <b>Current Buyers:</b> {saree.buyers}+ members
      </p>

      <p>
        <b>Price:</b> ₹{saree.price}
      </p>

      <p className="description">
        This saree is made with {saree.fabric}. It is suitable for{" "}
        {saree.category} occasions and comes in a standard saree length of{" "}
        {saree.meters}.
      </p>

      <a
        className="buy-btn"
        href={saree.link}
        target="_blank"
      >
        Buy Now
      </a>
    </div>
  );
}

export default SareeCard;