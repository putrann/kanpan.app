import React from "react";
import Note from "./Note";
import Editable from "./Editable";
export default ({
  notes,
  onDelete = () => {},
  onEdit = () => {},
  onNoteClick = () => {}
}) => (
  <ul>
    {notes.map(({ id, editing, task }) => (
      <li key={id}>
        <Note onClick={onNoteClick.bind(null, id)}>
          <Editable
            editing={editing}
            onEdit={onEdit.bind(null, id)}
            value={task}
          />

          <button
            style={{ marginLeft: "10px" }}
            onClick={onDelete.bind(null, id)}
          >
            x
          </button>
        </Note>
      </li>
    ))}
  </ul>
);
