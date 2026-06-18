import ProductCard from "./ProductCard";

function Products() {
  const productList = [
    {
      name: "Headphones",
      price: 8976,
      discount: 2,
      rating: 2,
      img: "https://i.pinimg.com/736x/df/cc/65/dfcc65d52900881b2bcd0eff8b11660d.jpg"
    },
    {
      name: "Laptop",
      price: 765432,
      discount: 5,
      rating: 5,
      img: "https://robbreport.com/wp-content/uploads/2024/02/Lenovo_ThinkBook_Transparent3.jpg?w=1024"
    },
    {
      name: "Laptop",
      price: 765432,
      discount: 5,
      rating: 4,
      img: "https://robbreport.com/wp-content/uploads/2024/02/Lenovo_ThinkBook_Transparent3.jpg?w=1024"
    }
  ];

  return (
    <div className="product-container">
      {productList.map((item, index) => (
        <ProductCard key={index} product={item} />
      ))}
    </div>
  );
}

export default Products;