import React, { useState } from "react";
import Sidebar from "../component/sidebar";
import Userbar from "../component/Userbar";
import Mian from "../component/Mian";
import Popup from "../component/Popup";
import { v4 as uuidv4 } from "uuid";


const Home = () => {
  const [todo, setTodo] = useState([])
  const [ popup, setPopup] = useState(false);
  const [status, setStatus] = useState("All");


  const handleSubmitData = (title,date,description,setTitle,setDate,setDescription) => {
    setTodo([...todo, { id: uuidv4(), task: title , date: date, description: description, important: false,completed: false }]);
    setTitle("");
    setDate("");
    setDescription("");
  };
  const handleDelete = (id) => {
    console.log(id, "test");
    const filterData = todo.filter((ele) => ele.id !== id);
    setTodo(filterData);
  };

  const handleCompleted = (id)=>{
    console.log(id,"id");
    const index = todo.findIndex((ele)=>ele.id === id);
    todo[index].completed = !todo[index].completed
    setTodo([...todo]);
  }
  
  const handleImportant = (id)=>{
    console.log(id);
    const index = todo.findIndex((ele)=>ele.id === id);
    console.log(index,"index");
    todo[index].important = !todo[index].important
    setTodo([...todo]);
    console.log(todo);
    
  }
console.log(status,"status");

  return (
    <div>
      <div className="flex">
        <Sidebar status={status} setPopup={setPopup} setStatus={setStatus} />
        <Mian todo={todo} setPopup={setPopup} status={status} handleDelete={handleDelete} handleCompleted={handleCompleted} handleImportant={handleImportant}/>  
        <Userbar />
      </div>
      <Popup popup={popup} setPopup={setPopup} handleSubmitData={handleSubmitData} />
    </div>
  );
};

export default Home;
