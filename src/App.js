import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('');
  const [filterTodos, setFilterTodos] = useState([]);

  // render when app opens
  useEffect(() => {
    getLocalTodos();
  }, []);
  
  // render every time todos or status change
  useEffect(() => {
      handleFilter();
      saveLocalTodos();
  }, [todos, status]);

  const handleFilter = () => {
    switch(status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

    const saveLocalTodos = () => {
       localStorage.setItem("todos", JSON.stringify(todos));
      };

    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
      }
    };

  return (
    <div className="App">
      <header>TeamPickle's Todo List </header>
      <Form 
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      setStatus={setStatus}
      setFilterTodos={setFilterTodos}
      
      />
      <Todolist 
        setTodos={setTodos}
        todos={todos}
        filterTodos={filterTodos}
      />
    </div>
  );
}

export default App;
