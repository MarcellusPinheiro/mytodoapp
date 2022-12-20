import { useState } from "react";
import { emitter } from "../notification";

const addTodoStyle = {
  position: "fixed",
  bottom: 10,
  display: "block",
  width: "100%",
};

const AddTodo = (fnAddTodo) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = { id: Math.random(), title: title, done: false };
    fnAddTodo.AddToDo(newToDo);
    emitter.emit("NOTIFICATION", "New todo added successfully");
    //console.log(newToDo);
    setTitle("");
  };

  return (
    <div style={addTodoStyle}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter Something here'
          style={{ width: "90%", padding: 10 }}
          required
        />
        <input type='submit' style={{ width: 80, padding: 10 }} />
      </form>
    </div>
  );
};

export default AddTodo;
