import React from "react";

const TodoFooter = (props) => {
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{props.todoActive}</strong> item
          {props.todoActive > 1 && "s"} left
        </span>
        <ul className="filters">
          <li>
            <a
              className={props.action === "all" ? "selected" : ""}
              href="#/"
              onClick={() => props.onFilterTodo("all")}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={props.action === "active" ? "selected" : ""}
              href="#/active"
              onClick={() => props.onFilterTodo("active")}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={props.action === "completed" ? "selected" : ""}
              href="#/completed"
              onClick={() => props.onFilterTodo("completed")}
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={() => props.onDeleteCompletedTodo()}
        >
          Clear completed ({props.todoCompleted})
        </button>
      </footer>
    </div>
  );
};

export default TodoFooter;
