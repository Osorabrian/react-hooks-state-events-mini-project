import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const  [data, setData] = useState(TASKS)
  const [category, setCategory] = useState(CATEGORIES)

function filterCategories(category){
  console.log(category)
  const newArray = data.filter(data => data.category === category)
  if(category === "All"){
    setData(TASKS)
  }else{
    setData(newArray)
  }
}

function deleteTransaction(text){
  console.log(text)
  const newArray = data.filter((task => task.text !== text))
  setData(newArray)
}

function onTaskFormSubmit(array){
  console.log(array)
  setData([...data, array])
  console.log(data)
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={category} filterCategories={filterCategories}/>
      <NewTaskForm categories={category} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={data} deleteTransaction={deleteTransaction}/>
    </div>
  );
}

export default App;
