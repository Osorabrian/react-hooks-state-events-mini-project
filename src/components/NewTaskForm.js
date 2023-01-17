import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState("")
  const [category, setCategory] = useState("")


  const removeAll = categories.filter((data) => data !== "All")

  const data = removeAll.map((data, index) => {
    return <option key={index} value={data}>{data}</option>
  })

  function addTask(){
    const taskArray = {text, category}
    onTaskFormSubmit(taskArray)
  }

  return (
    <form className="new-task-form" onSubmit={(e) => {
      e.preventDefault()
      addTask()}}>
      <label>
        Details
        <input type="text" name="text" id="details" onChange={(e) => {setText(e.target.value)}}/>
      </label>
      <label>
        Category
        <select name="data" id="data" onChange={(e) => {setCategory(e.target.value)}}>
          {data}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
