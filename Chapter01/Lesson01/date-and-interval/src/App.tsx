import './App.css'

function App() {

  const date:Date = new Date();

  return (
    <div>
      <h1>年</h1>
      <h2>{date.getFullYear()}</h2>

      <h1>月</h1>
      <h2>{date.getMonth() + 1}</h2>

      <h1>日</h1>
      <h2>{date.getDate()}</h2>

      <h1>時間:分:秒</h1>
      <h2>{date.getHours()} : {date.getMinutes()} : {date.getSeconds()}</h2>

    </div>
  );
}

export default App
