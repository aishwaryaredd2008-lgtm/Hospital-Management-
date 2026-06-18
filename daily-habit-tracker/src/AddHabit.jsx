import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../Store";

export default function AddHabit() {
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const { addHabit } = useData();
  const nav = useNavigate();

  function submit(e) {
    e.preventDefault();
    if (!name.trim()) return setErr("Habit required");
    addHabit(name);
    nav("/dash");
  }

  return (
    <form onSubmit={submit}>
      <h2>Add Habit</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Habit name" />
      <p>{err}</p>
      <button>Add</button>
    </form>
  );
}