import React from "react";

const Sidebar = ({ status, setPopup,setStatus }) => {
  return (
    <div style={{backgroundColor: "var(--side-clr)"}} className="w-[16vw] h-[100vh] fixed  flex flex-col ">
      <div className="flex flex-col px-5">
        <h1 style={{color: "var(--text-b)"}} className="text-xl font-bold pt-10 pb-5">TO-DO LIST</h1>
        <button
          className="bg-purple-600 rounded text-white w-[100%] py-2 "
          onClick={() => setPopup(true)}
        >
          ADD TASK
        </button>
      </div>

      <div className=" pt-10 flex flex-col gap-3">
        <h1 className={`${
                status === "All" ? "bg-purple-300 text-purple-600" : "text-gray-500"
              } px-5 py-2 cursor-pointer mt-10`} onClick={() => setStatus("All")}>
          All tasks
        </h1>
        <h1 className={`${
                status === "Important" ? "bg-purple-300 text-purple-600" : "text-gray-500"
              } px-5 py-2 cursor-pointer`} onClick={() => setStatus("Important")}>
          Important tasks
        </h1>

        <h1 className={`${
                status === "Complete" ? "bg-purple-300 text-purple-600" : "text-gray-500"
              } px-5 py-2 cursor-pointer`} onClick={() => setStatus("Complete")}>
          Completed tasks
        </h1>

        <h1 className={`${
                status === "Uncomplete" ? "bg-purple-300 text-purple-600" : "text-gray-500"
              } px-5 py-2 cursor-pointer`} onClick={() => setStatus("Uncomplete")}>
          Uncompleted tasks
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
