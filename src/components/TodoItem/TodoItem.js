import React from "react";

const TodoItem = (props) => {
  const onClickChange = (id) => {
    props.setEditId(id);
  };

  const onKeyPressEnter = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      props.onEditTodo(e.target.value, props.todo.id);
      props.setEditId("");
    }
  };
  return (
    <div>
      <ul className="todo-list">
        <li
          className={
            props.todo.checked
              ? "completed"
              : props.onEditId === props.todo.id
              ? "editing"
              : ""
          }
          onDoubleClick={() => onClickChange(props.todo.id)}
        >
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onClick={() => props.onToggleCheck(props.todo.id)}
              checked={props.todo.checked}
              readOnly
            />
            <label>{props.todo.label}</label>
            <button
              className="destroy"
              onClick={() => props.onDeleteTodoItem(props.todo.id)}
            ></button>
          </div>
          <input
            className="edit"
            defaultValue={props.todo.label}
            onKeyDown={onKeyPressEnter}
          />
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
