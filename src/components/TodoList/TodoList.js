import React from "react";
import Header from "../Header/Header";
import TodoItem from "../TodoItem/TodoItem";
import Footer from "../Footer/Footer";
import TodoFooter from "../TodoFooter/TodoFooter";
const TodoList = (props) => {
  return (
    <>
      <section className="todoapp">
        <Header onAddTodo={props.onAddTodo} />
        <section className="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            readOnly
            onClick={props.onMarkAsCompleted}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
          {props.action === "active"
            ? props.todoList
                .filter((item) => item.checked === false)
                .map((item) => (
                  <TodoItem
                    todo={item}
                    key={item.id}
                    onEditTodo={props.onEditTodo}
                    onEditId={props.editId}
                    setEditId={props.setEditId}
                    onDeleteTodoItem={props.onDeleteTodoItem}
                    onToggleCheck={props.onToggleCheck}
                  />
                ))
            : props.action === "completed"
            ? props.todoList
                .filter((item) => item.checked === true)
                .map((item) => (
                  <TodoItem
                    todo={item}
                    key={item.id}
                    onEditTodo={props.onEditTodo}
                    onEditId={props.editId}
                    setEditId={props.setEditId}
                    onDeleteTodoItem={props.onDeleteTodoItem}
                    onToggleCheck={props.onToggleCheck}
                  />
                ))
            : props.action === "all" &&
              props.todoList.map((item) => (
                <TodoItem
                  todo={item}
                  key={item.id}
                  onEditTodo={props.onEditTodo}
                  onEditId={props.editId}
                  setEditId={props.setEditId}
                  onDeleteTodoItem={props.onDeleteTodoItem}
                  onToggleCheck={props.onToggleCheck}
                />
              ))}
        </section>
        <TodoFooter
          onFilterTodo={props.onFilterTodo}
          onDeleteCompletedTodo={props.onDeleteCompletedTodo}
          todoCompleted={props.todoCompleted}
          todoActive={props.todoActive}
          action={props.action}
        />
      </section>
      <Footer />
    </>
  );
};
export default TodoList;
