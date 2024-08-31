import { BaseSyntheticEvent, useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [message, setMessage] = useState<string>("おはようございます");

  const handleChange = (e:BaseSyntheticEvent) => {
    setInputText(e.target.value);
  }

  const handleClick = () => {
    setMessage(inputText);
  }
  
  return (
    <>
      <h1>{message}</h1>
      <input type="text" value={inputText} onChange={handleChange} placeholder='なにか入力して下さい'/><br/>
      <button onClick={handleClick}>挨拶を変更する</button>
    </>
  )
}

export default App
