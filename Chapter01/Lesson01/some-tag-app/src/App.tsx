import './App.css'
function App() {

  const str1:string = "123";
  const num1:number = 1;

  console.log(str1 + num1);

  const num2:number = parseInt(str1);
  console.log(num2 + 1);

  return (
    <>
      <h1>Typescriptの学習</h1>
    </>
  )
}

export default App
