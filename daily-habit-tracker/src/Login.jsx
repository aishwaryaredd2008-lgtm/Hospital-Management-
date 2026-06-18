import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../Store";

export default function Login() {
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const { setUser } = useData();
  const nav = useNavigate();

  function submit(e) {
    e.preventDefault();
    if (!name.trim()) return setErr("Name required");
    setUser(name);
    nav("/dash");
  }

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <p>{err}</p>
      <button>Login</button>
    </form>
  );
}