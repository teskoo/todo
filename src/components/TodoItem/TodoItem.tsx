import React from 'react';
import './todoitem.css';
import trash from '../../assets/icons/trash.svg';
import check from '../../assets/icons/check.svg';
import checkdone from '../../assets/icons/check_done.svg';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, toggleTodo, deleteTodo }) => {
    return (
      <li className={ completed ? 'completed__list list__container' : 'list__container'}>
        <div className='check__button' onClick={() => toggleTodo(id)}>{completed ? <img width={24} height={24} src={checkdone}/> : <img width={24} height={24} src={check}/>}</div>
        <div className={completed ? 'completed list_text' : 'list_text'}>{text}</div>
        <div className='trash__button' onClick={() => deleteTodo(id)}>
          <img width={24} height={24} src={trash} />
        </div>
      </li>
    );
};
  
export default TodoItem;