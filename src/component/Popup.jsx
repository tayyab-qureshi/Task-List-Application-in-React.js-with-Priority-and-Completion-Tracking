import React, { useState } from "react";

const Popup = ({ popup, setPopup,handleSubmitData }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div
      style={{
        display: popup ? "block" : "none",
        position: "fixed",
        zIndex: 99999,
        backgroundColor: "rgba(0,0,0,0.5)",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="popup w-4/12  rounded h-[80vh] bg-gray-300"
      >
        <div className="popup-content px-5 flex flex-col">
          <div className="flex justify-between pt-5">
            <h1 className="text-xl">Add a task</h1>
            <button className="text-xl" onClick={() => setPopup(false)}>x</button>
          </div>
          <label htmlFor="Title" className="pt-5 " style={{color: "var(--text-s)"}}>
            Title
          </label>
          <input
            id="Title"
            type="text"
            placeholder="e.g, study for the test"
            className="py-3 px-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="Date" className="pt-3">
            Date
          </label>
          <input
            id="Date"
            type="date"
            className="py-3 px-2 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="Description" className="pt-3">
            Description (optional)
          </label>
          <textarea
            name=""
            id="Description"
            cols="30"
            rows="3"
            className="rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="flex gap-2 pt-3">
            <input type="checkbox" />
            <h1>Mark as important</h1>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <h1>Mark as complete</h1>
          </div>
          <button className="bg-purple-500 rounded py-2 mt-5 text-white"  onClick={()=>{ handleSubmitData(title,date,description,setTitle,setDate,setDescription) ; setPopup(false)  }}>
            Add a task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
