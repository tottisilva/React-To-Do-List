import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completedHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }));
  };
    return (
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button onClick={completedHandler} className="complete-btn">
          <i className="fas fas-check"></i>
        </button>
        <button onClick={deleteHandler} lassName="trash-btn">
          <i className="fas fas-trash">
          </i>
        </button>
      </div>
    );
  }
  export default Todo;