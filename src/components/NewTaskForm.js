import React, { useState } from "react";


function NewTaskForm({onTaskFormSubmit, categories}) {
  const [form, setForm]= useState({
    text : '',
    category: 'Code'
  })

  function handleNewFormAdding(event){
    event.preventDefault()
    const newTask = {
      text:form.text,
      category: form.category
    }
    onTaskFormSubmit(newTask)
  }

  const options = categories.map(category=>{
    return <option key={category}>{category}</option>
  })

  return (
    <form className="new-task-form" onSubmit ={handleNewFormAdding}>
      <label>
        Details
        <input type="text" 
        name="text" 
        onChange = {(event)=> setForm({...form, text: event.target.value})}/>
      </label>
      <label>
        Category
        <select name="category" onChange = {(event)=> setForm({...form, category: event.target.value})}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
