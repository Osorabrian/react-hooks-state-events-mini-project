import React from "react";

function Task({category, text, deleteData}) {

  function handleLiClick(){
    deleteData(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleLiClick()}>X</button>
    </div>
  );
}

export default Task;
