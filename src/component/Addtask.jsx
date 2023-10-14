import React from 'react'

const Addtask = ({setPopup}) => {
  return (
    <div
    className=" w-[31.68%] h-[38vh] border-2 border-dashed border-gray-400 rounded-[10px] shadow-lg pt-2 px-3 flex justify-center items-center"
    onClick={() => setPopup(true)}
  >
    <h1 className="text-gray-400">Add new task</h1>
  </div>
  )
}

export default Addtask
