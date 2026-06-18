import { useParams } from "react-router-dom";
import { useData } from "../Store";

export default function Details() {
  const { id } = useParams();
  const { habits } = useData();
  const h = habits.find(x => x.id == id);

  if (!h) return <h2>Habit not found</h2>;

  return (
    <div>
      <h2>{h.name}</h2>
      <p>Status: {h.done ? "Completed" : "Pending"}</p>
    </div>
  );
}