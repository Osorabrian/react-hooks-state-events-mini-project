import React from "react";
import Task from "./Task";

function TaskList({tasks, deleteTransaction}) {

  function deleteData(text) {
    deleteTransaction(text)
 }

  let task = tasks.map((item, index) => {
    return (<Task key={index} category={item.category} text={item.text} deleteData={deleteData}/>
    )
  })
 
  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;
