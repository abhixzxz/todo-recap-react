import React, { useState } from "react";
import toDoImg from "../assets/8810413.jpg";

function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const [toDo, setToDo] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleCreateTodo = () => {
    if (newTodo.trim() !== "") {
      if (editingIndex !== null) {
        const updatedToDo = [...toDo];
        updatedToDo[editingIndex] = {
          ...updatedToDo[editingIndex],
          data: newTodo.trim(),
        };
        setToDo(updatedToDo);
        setEditingIndex(null);
      } else {
        setToDo([...toDo, { id: Date.now(), data: newTodo.trim() }]);
      }
      setNewTodo("");
    }
  };

  const handleDelete = (index) => {
    const updatedToDo = [...toDo];
    updatedToDo.splice(index, 1);
    setToDo(updatedToDo);
    setNewTodo("");
  };

  const handleEdit = (index) => {
    const editedTodo = toDo[index];
    setNewTodo(editedTodo.data);
    setEditingIndex(index);
  };

  return (
    <div className="w-full min-h-screen bg-purple-400 flex flex-col items-center justify-center">
      <div className="flex justify-between gap-3">
        <h1 className="font-bold text-3xl text-purple-700 mb-6 p-2 uppercase">
          React-powered Todo List App!
        </h1>
      </div>

      <div className="w-full max-w-screen-md p-6 bg-purple-500 rounded-3xl border-[7px] border-purple-700">
        <div className="mb-6 flex justify-center">
          <img
            src={toDoImg}
            alt="fds"
            className="w-[50%] h-[60%] rounded-2xl justify-center flex items-center border-[7px] border-purple-700"
          />
        </div>

        <div className="flex flex-col space-y-4 mb-4">
          <label
            htmlFor=""
            className="text-xl text-white uppercase stroke-purple-600"
          >
            Enter your todo..!
          </label>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              type="text"
              name=""
              id=""
              className="flex-grow h-10 border-3 border-purple-700 rounded-full p-2"
            />

            <button
              onClick={handleCreateTodo}
              className="w-full md:w-32 h-10 text-white text-lg bg-purple-800 font-bold rounded-full"
            >
              Add Todo
            </button>
          </div>
        </div>

        <div className="h-60 overflow-y-auto">
          <ul className="space-y-2">
            {toDo?.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 border-b text-white"
              >
                <span className="font-bold capitalize">{item?.data}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-sm bg-green-600 px-3 py-1 rounded-2xl uppercase"
                  >
                    edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-sm bg-red-500 px-3 py-1 rounded-2xl uppercase"
                  >
                    delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
