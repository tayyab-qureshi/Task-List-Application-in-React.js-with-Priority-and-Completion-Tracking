import React from 'react'
import Task from './Task'

const List = ({todo, setPopup, handleDelete, handleCompleted ,handleImportant}) => {
  return todo.map((ele) => (
    <Task 
    ele={ele}
    handleDelete={handleDelete}
    handleCompleted={handleCompleted}
    handleImportant={handleImportant}

    />
  ))
}

export default List
