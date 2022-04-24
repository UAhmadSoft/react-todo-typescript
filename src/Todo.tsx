import React from 'react';
import { TodoInterface } from './interfaces/todos';

interface Props {
  todo: TodoInterface;
  completeTask(name: String): void;
  // todo?: TodoInterface; This means optional
}

const Todo = ({ todo, completeTask }: Props) => {
  return (
    <div className='task'>
      <div className='content'>
        <span>{todo.name}</span>
        <span>{'' + todo.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(todo.name);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
