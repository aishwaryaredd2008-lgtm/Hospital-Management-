import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../Store";

export default function Dashboard() {
  const { user, habits, toggle } = useData();
  const searchRef = useRef();
  const [search, setSearch] = useState("");

  const list = habits.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Welcome {user}</h2>

      <input
        ref={searchRef}
        placeholder="Search"
        onChange={() => setSearch(searchRef.current.value)}
      />

      {list.map(h => (
        <div className="card" key={h.id}>
          <h3>{h.name}</h3>
          <p>{h.done ? "Completed" : "Pending"}</p>
          <button onClick={() => toggle(h.id)}>Change Status</button>
          <Link to={`/habit/${h.id}`}> Details</Link>
        </div>
      ))}
    </div>
  );
}