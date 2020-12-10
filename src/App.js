import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  //States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilterTodos] = useState([]);
  //useEffect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //Functions and Events
  const filterHandler = () => {
    switch (status) {
      case 'completed' :
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default: setFilterTodos(todos);
        break;
  }
  }
  const saveLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify('todos'));
    }
  }
  return (
    <div className="App">
     <header>
      <h1>José Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
       />
      <ToDoList  filteredTodos={filteredTodos} todos={todos}
        setTodos={setTodos}  />
    </div>
  );
}

export default App;
