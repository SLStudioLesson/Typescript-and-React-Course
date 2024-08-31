import { useState } from 'react'

import './App.css'

// Todoアイテムの型定義
interface Todo {
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTodo = (index: number) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1>Todoアプリ</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="新しいタスクを追加"
          className="todo-input"
        />
        <button onClick={addTodo} className="add-button">追加</button>
      </div>
      <div>
        <button onClick={() => setFilter('all')} className="filter-button">すべて</button>
        <button onClick={() => setFilter('active')} className="filter-button">未完了</button>
        <button onClick={() => setFilter('completed')} className="filter-button">完了</button>
      </div>
      <ul className="todo-list">
        {filteredTodos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span
              className={todo.completed ? 'completed' : ''}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
