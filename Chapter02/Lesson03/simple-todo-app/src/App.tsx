import { useState } from 'react'
import './App.css'

interface Todo {
  text: string;
  completed: boolean;
}

function App() {
  const [inputText, setInputText] = useState<string>("");
  //const [todoList, setTodoList] = useState<string[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChangeText = (e) => {
    setInputText(e.target.value);
  }

  const handleClick = () => {
    if(inputText != "" ) {
      const newTodo:Todo = {text: inputText, completed: false};
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  }

  const toggleTodo = (index:number) => {
    todos[index].completed = !todos[index].completed;
    setTodos([...todos])
  }

  return (
    <>
      <div className="app-container">
        <h1>シンプルTodoアプリ</h1>
        <div>
          <input
            type='text'
            placeholder='新しいタスクを入力'
            className='todo-input'
            value={inputText}
            onChange={handleChangeText}
          />
          <button className='add-button' onClick={handleClick}>追加</button>
        </div>
      </div>

      <ul className='todo-list'>
        {todos.map((todo, index) => {
          if ( todo.completed == true ) {

            return (
              <li key={index} className='todo-item'>
                <span
                  className='completed'
                  onClick={() => toggleTodo(index)}
                >
                  {todo.text}
                </span>
              </li>
            );

          } else {
            
            return (
              <li key={index} className='todo-item'>
                <span
                  onClick={() => toggleTodo(index)}
                >
                  {todo.text}
                </span>
              </li>

            )
          }
        })}
      </ul>
    </>
  )
}

export default App
