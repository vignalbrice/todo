import React, { useState } from "react";
import "./base.css";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [action, setAction] = useState("all");
  const [onEditId, setEditId] = useState("");

  const onAddTodo = (todoItem) => {
    setTodo([...todo, todoItem]);
  };
  const onToggleCheck = (todoId) => {
    const filteredItemChecked = todo.filter((item) => {
      if (item.id === todoId) {
        item.checked = !item.checked;
      }
      return item;
    });
    const sliceItemChecked = todo.slice([todo, filteredItemChecked]);
    setTodo(sliceItemChecked);
  };
  const onFilterTodo = (action) => {
    setAction(action);
  };
  const onEditingTodo = (value, id) => {
    for (let key in todo) {
      if (todo[key].id === id) {
        todo[key].label = value;
        setTodo(todo.slice([todo, todo[key]]));
      }
    }
  };
  const onDeleteCompletedTodo = () => {
    setTodo(
      todo.filter((item) => {
        return !item.checked;
      })
    );
  };
  const onMarkAsCompleted = () => {
    setTodo(
      todo.map((item) => {
        item.checked = !item.checked;
        return item;
      })
    );
  };
  const onDeleteTodoItem = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  return (
    <>
      <TodoList
        todoList={todo}
        action={action}
        onAddTodo={onAddTodo}
        onEditTodo={onEditingTodo}
        editId={onEditId}
        setEditId={setEditId}
        onFilterTodo={onFilterTodo}
        onToggleCheck={onToggleCheck}
        onDeleteTodoItem={onDeleteTodoItem}
        onDeleteCompletedTodo={onDeleteCompletedTodo}
        onMarkAsCompleted={onMarkAsCompleted}
        todoCompleted={todo.filter((item) => item.checked === true).length}
        todoActive={todo.filter((item) => item.checked === false).length}
      />
    </>
  );
};

export default App;
