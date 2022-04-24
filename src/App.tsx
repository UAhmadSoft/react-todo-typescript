import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import { TodoInterface } from './interfaces/todos';
import Todo from './Todo';

const App: FC = () => {
  // const [name, setName] = useState<string>('');
  // const [deadline, setDeadline] = useState<number>(0);

  const initialState = {
    name: '',
    deadline: 0,
  };
  const [state, setState] = useState(initialState);

  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setState((st) => ({
      ...st,
      [e.target.name]: e.target.value,
    }));
  };

  const addTask = (): void => {
    setTodos((st) => [...st, { name: state.name, deadline: state.deadline }]);
    setState(initialState);
  };

  const completeTask = (name: String): void => {
    setTodos((st) => st.filter((el: TodoInterface) => el.name !== name));
  };

  return (
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
          <input
            value={state.name}
            onChange={handleChange}
            type='number'
            name='name'
            placeholder='Deadline (days)'
          />
          <input
            value={state.deadline}
            onChange={handleChange}
            type='text'
            name='deadline'
            placeholder='Task Name'
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todos.map((el: TodoInterface) => (
          <Todo
            todo={el}
            completeTask={completeTask}
            key={Math.floor(Math.random() * 10000)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
