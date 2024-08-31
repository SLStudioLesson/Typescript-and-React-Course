import './App.css'

function App() {

  const isEditable:boolean = true;
  const userName:string = "山田太郎";

  const yellowText:boolean = true;

  return (
    <>
      <p className={ yellowText ? "text-yellow" : ""}>お名前：</p>
      { isEditable ? <input type="text" placeholder={userName}/> : <p>{userName}</p>}
      
    </>
  );

}

export default App