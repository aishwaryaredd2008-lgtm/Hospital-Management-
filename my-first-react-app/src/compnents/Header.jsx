function Header() {
  return (
    <div>
      <hr />

      <nav>
        <ul
          style={{
            display: "flex",
            gap: "15px",
            listStyle: "none"
          }}
        >
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>

    </div>
  )
}

export default Header