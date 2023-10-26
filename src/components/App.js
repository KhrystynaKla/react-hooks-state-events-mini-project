import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {

  const [tasks, setTasks]= useState(TASKS)
  const [selected, setSelected]=useState('All')
  

  function handleDeleteButton (text){
    setTasks(tasks.filter(task=> {
      return (task.text!==text)
    }))
  }

  function onTaskFormSubmit(newTask){
    setTasks([...tasks, newTask]) 
  }


  const newTasks = tasks.filter(task=>{
    if(selected==='All') return true;
    return (task.category===selected)
  })

  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selected={selected} setSelected={setSelected} categories={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES.filter((category)=> category!=='All')}/>
      <TaskList tasks ={newTasks} handleDeleteButton={handleDeleteButton}/>
    </div>
  );
}

export default App;
