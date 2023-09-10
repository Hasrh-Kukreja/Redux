import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/todoSlice';

interface TodoItemProps {
  todo: any;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      {todo.text}
    </li>
  );
};

export default TodoItem;
