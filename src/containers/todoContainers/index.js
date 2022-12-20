import { useState } from "react";
import AddTodo from "../../components/addTodo";
import Notification from "../../components/notification";
import TodoList from "../../components/todoList";

const todoList = [
  { id: 1, title: "Learn React", done: true },
  { id: 2, title: "Create a todo Application", done: false },
];

const ToDoContainer = () => {
  const [myListToDos, setMyListToDos] = useState(todoList);

  const handleAddToDo = (newToDo) => {
    const newToDoList = [...myListToDos, newToDo];
    console.log(newToDoList);
    setMyListToDos(newToDoList);
  };

  const handleRemoveToDo = (id) => {
    const newToDoList = myListToDos.filter((todo) => todo.id !== id);
    //console.log(newToDoList);
    setMyListToDos(newToDoList);
  };

  const handleCheckboxChange = (id) => {
    const newToDoList = myListToDos.map((todo) => {
      if (todo.id === id) return { ...todo, done: !todo.done };
      return todo;
    });
    //console.log(newToDoList);
    setMyListToDos(newToDoList);
  };

  return (
    <div style={{ margin: 20 }}>
      <h4 align='center'>Todo Application</h4>
      <Notification />
      {myListToDos.length > 0 ? (
        myListToDos.map((todo) => (
          <TodoList
            key={todo.id.toString()}
            myListToDo={todo}
            removeToDo={handleRemoveToDo}
            clickCheckbox={handleCheckboxChange}
          />
        ))
      ) : (
        <p align='center'>no ToDo left</p>
      )}
      <AddTodo AddToDo={handleAddToDo} />
    </div>
  );
};

export default ToDoContainer;
