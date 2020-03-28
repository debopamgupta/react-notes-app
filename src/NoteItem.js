import React from "react";

const NoteItem = props => {
  const { note, index } = props;
  return (
    <li>
      <span className="subtitle">{note.title}</span>
      <button className="removebtn" onClick={() => props.removeTodo(index)}>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
    </li>
  );
};

export default NoteItem;
