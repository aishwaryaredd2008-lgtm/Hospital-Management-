import { createContext, useContext, useEffect, useState } from "react";

const Ctx = createContext();

export function Provider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user") || "");
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem("habits")) || []
  );

  useEffect(() => localStorage.setItem("user", user), [user]);
  useEffect(() => localStorage.setItem("habits", JSON.stringify(habits)), [habits]);

  const addHabit = (name) =>
    setHabits([...habits, { id: Date.now(), name, done: false }]);

  const toggle = (id) =>
    setHabits(habits.map(h => h.id == id ? { ...h, done: !h.done } : h));

  const logout = () => setUser("");

  return (
    <Ctx.Provider value={{ user, setUser, habits, addHabit, toggle, logout }}>
      {children}
    </Ctx.Provider>
  );
}

export const useData = () => useContext(Ctx);