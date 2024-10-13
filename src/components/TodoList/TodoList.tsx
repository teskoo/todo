import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import clipboard from '../../assets/icons/clipboard.svg';
import './todolist.css';

interface TodoListProps {
  todos: { id: number; text: string; completed: boolean }[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
    return (
    <div className='todo__section'>
      <div className='todo__title'>
        <div className='todo__count todo'>
          <h2>Number of tasks</h2><div className='counter'>{todos.length}</div>
        </div>
        <div className='todo__done todo'>
          <h2>Done</h2><div className='counter'>{todos.length > 0 ? `${todos.filter(todo => todo.completed).length} of ${todos.length}` : 0}</div>
        </div>
      </div>
      {todos.length === 0 ? 
      <div className='empty__list'>
        <img width={56} height={56} src={clipboard}/>
        <div className='empty__text'>
          <h2>You have no tasks registered yet</h2>
          <h3>Create tasks and organize your To-Do</h3>
        </div>
      </div> 
      : 
      <ul className='todo__list'>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      }   
    </div>
    );
};
  
export default TodoList;