import React, { useState } from 'react';
import { Todo } from './interface/Todo';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import plus from '../src/assets/icons/plus.svg';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTask = {
        id: Date.now(),
        text: newTodo,
        completed: false
      };
      setTodos([...todos, newTask]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='App'>
      <Header />
      <div className='todolist__container'>
        <div className='todo__form'>
          <input className='todo__input' value={newTodo} type='text' name='todo' minLength={3} onChange={(e) => setNewTodo(e.target.value)} placeholder='Add a new task...' />
          <button className='todo__button' onClick={addTodo} disabled={!newTodo.trim()}>Create<img src={plus} /></button>
        </div>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  )
}

export default App;