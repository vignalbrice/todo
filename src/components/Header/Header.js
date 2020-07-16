import React from "react";
import { uuid } from "uuidv4";

const Header = (props) => {
  const onAddTodoEvent = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      props.onAddTodo({
        id: uuid(),
        label: event.target.value.trim(),
        checked: false,
      });
      event.target.value = "";
    }
  };
  return (
    <div>
      <header className="header">
        <h1>Todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onKeyDown={(e) => onAddTodoEvent(e)}
        />
      </header>
    </div>
  );
};

export default Header;
