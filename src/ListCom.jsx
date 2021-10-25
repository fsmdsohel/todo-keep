import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const ListCom = (props) => {
  const [line, setLine] = useState(false);

  const cutIt = () => {
    setLine(true);
  };

  return (
    <div className="todo_style">
      <div className="btn_div">
        <span onClick={cutIt}>
          <IconButton className="sbtn_div">
            <DeleteIcon className="icons" />
          </IconButton>
        </span>
      </div>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}{" "}
      </li>
    </div>
  );
};

export default ListCom;
