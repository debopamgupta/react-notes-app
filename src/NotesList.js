import React from "react";
import NoteItem from "./NoteItem";

const NotesList = props => {
  return (
    <ul>
      {props.notes.map((note, index) => {
        return (
          <NoteItem
            className="ntitem"
            key={index}
            index={index}
            note={note}
            toggleTodoDone={props.toggleTodoDone}
            removeTodo={props.removeTodo}
          />
        );
      })}
    </ul>
  );
};

export default NotesList;
