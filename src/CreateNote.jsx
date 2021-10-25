import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const expandIt = () => {
    setExpand(true);
  };

  const btoNorMal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_note">
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            cols=""
            rows=""
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="Write a note..."
            onClick={expandIt}
          ></textarea>
          {expand ? (
            <>
              <IconButton className="add_items" onClick={addEvent}>
                <AddIcon />
              </IconButton>
              <IconButton className="add_items add_items2" onClick={btoNorMal}>
                <CloseIcon />
              </IconButton>
            </>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
