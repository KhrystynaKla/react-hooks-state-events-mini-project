import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDeleteButton}) {
  return (
    <div className="tasks">
      {tasks.map((task,index)=>{
        return <Task key ={index} text={task.text} category={task.category} handleDeleteButton={handleDeleteButton}/>
      })}
    </div>
  );
}

export default TaskList;
