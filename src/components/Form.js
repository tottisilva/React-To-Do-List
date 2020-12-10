import React from 'react';


const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  //Here i will put some JavaScript
  const inputTexHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitToDoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, id: Math.random() * 100 }
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value)
  };
    return (
      <form>
        <input onChange={inputTexHandler} type="text" className="todo-input" />
        <button onClick={submitToDoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
  }

export default Form;

