import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="note">
        <h1> {props.title} </h1>
        <p> {props.content} </p>
        <IconButton className="delete_icons" onClick={deleteNote}>
          <DeleteIcon className="delete_icon" />
        </IconButton>
      </div>
    </>
  );
};

export default Note;
