import React from "react";

function StudentCard({ student }) {

  let grade = "";

  if (student.marks > 85) grade = "A";
  else if (student.marks > 70) grade = "B";
  else if (student.marks > 50) grade = "C";
  else grade = "D";

  return (
    <div>
      <h3>{student.name}</h3>
      <p>Marks: {student.marks}</p>
      <p>
        Grade: {grade} {grade === "A" ? "⭐⭐⭐" : ""}
      </p>
    </div>
  );
}

export default StudentCard;