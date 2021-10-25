import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import ListCom from "./ListCom";

const App = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewitem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItem = () => {
    setItem("");
    setNewitem((prevValue) => {
      return [...prevValue, item];
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> ToDo List </h1>
          <br />
          <div className="input_fild">
            <input
              type="text"
              placeholder="Add an Item"
              onChange={itemEvent}
              value={item}
            />
            <div className="newBtns">
              <IconButton className="newBtn" onClick={listOfItem}>
                <AddIcon />
              </IconButton>
            </div>
          </div>
          <br />
          <ol>
            {newitem.map((val, ind) => {
              return <ListCom key={ind} text={val} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
