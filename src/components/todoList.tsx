import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
 import  {RootState} from '../redux/store';
import TodoItem from './todoItem';
import { addTodo } from '../redux/todoSlice';

const TodoList: React.FC = () => {
  const [newTodo, setNewTodo]:any = useState('');
  const todos = useSelector((state: RootState) => state.todos.todos); // Use typeof RootState
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
  {
    todos.map((todo: { id: number, text: string, completed: boolean }) => (
      <TodoItem todo={todo} key={todo.id} />
    ))
}
</ul>
    </div>
  );
};

export default TodoList;
