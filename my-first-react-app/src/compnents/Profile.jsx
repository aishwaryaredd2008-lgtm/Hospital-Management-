function Profile()
{
    return(
        <div style={sectionStyle}>
      <h2>PROFILE SECTION</h2>

      <img
        src="https://i.pinimg.com/474x/bc/0c/fc/bc0cfcaca278b49919e50069f1216acb.jpg"
        alt="profile"
        style={{ width: "200px", borderRadius: "10px" }}
      />

      <p><strong>NAME:</strong> Aishwarya</p>

      <p style={{ color: "Black", fontWeight: "bold" }}>
        Note: Keep learning and stay consistent
      </p>
    </div>
    )
}
 export default Profile