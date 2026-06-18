import { useData } from "../Store";

export default function Progress() {
  const { habits } = useData();
  const done = habits.filter(h => h.done).length;
  const percent = habits.length ? Math.round((done / habits.length) * 100) : 0;

  return (
    <div>
      <h2>Progress</h2>
      <h1>{percent}%</h1>
      <p>{done}/{habits.length} completed</p>
    </div>
  );
}