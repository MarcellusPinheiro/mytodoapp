import { emitter } from "../notification";

const TodoList = ({ myListToDo, removeToDo, clickCheckbox }) => {
  const handleCheckboxChange = () => {
    if (myListToDo.done) {
      alert("Task completed");
      return null;
    } else {
      clickCheckbox(myListToDo.id);
      emitter.emit(
        "NOTIFICATION",
        `"${myListToDo.title}" task checked is completed sucessfully`
      );
    }
  };

  //console.log(myListToDo);
  return (
    <div>
      <input
        type='checkbox'
        id='checkbox'
        style={{ margin: "0 10px" }}
        checked={myListToDo.done}
        onChange={() => {
          handleCheckboxChange();
        }}
      />
      <span style={myListToDo.done ? { textDecoration: "line-through" } : null}>
        {myListToDo.title}
      </span>
      <span
        style={{
          position: "fixed",
          right: 20,
          padding: "0 10px",
          cursor: "pointer",
          fontWeight: 600,
        }}
        onClick={() => {
          removeToDo(myListToDo.id);
          emitter.emit(
            "NOTIFICATION",
            `"${myListToDo.title}" task is removed is completed sucessfully`
          );
        }}
      >
        X
      </span>
      <hr />
    </div>
  );
};

export default TodoList;
