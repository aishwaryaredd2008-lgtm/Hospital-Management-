import React from "react";
import StudentCard from "./StudentCard";

function App() {

  const students = [
    { name: "Aishu", marks: 92 },
    { name: "Ravi", marks: 75 },
    { name: "Priya", marks: 60 },
    { name: "Kiran", marks: 45 }
  ];

  return (
    <div>
      <h1>Student Report Card</h1>

      {students.map((s, index) => (
        <StudentCard key={index} student={s} />
      ))}
      
    </div>
  );
}

export default App;