import React from "react";

export default function({ task, onDelete }) {
  console.log(task);
  return (
    <div>
      <span>{task}</span>
      <button onClick={onDelete}> x </button>
    </div>
  );
}
