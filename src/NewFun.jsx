import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const NewFun = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("I am clicked");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currData, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="notes">
        {addItem.map((value, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={value.title}
              content={value.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default NewFun;
