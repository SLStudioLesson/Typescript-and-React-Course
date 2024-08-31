import { useState } from 'react'
import './App.css'

function App() {

  const [user, setUser] = useState({ name: "山田", email: "yamada@yamada.com"})

  const handleChangeName = (e) => {
    setUser((prevUser)=>{
      return { ...prevUser, name: e.target.value };
    });
  }

  const handleChangeEmail = (e) => {
    setUser({...user, email: e.target.value});
  }

  return (
    <>
      <h3>name: {user.name}</h3>
      <input type="text" name="username" value={user.name} onChange={handleChangeName}/>

      <h3>email: {user.email}</h3>
      <input type="text" name="email" value={user.email} onChange={handleChangeEmail} />
    </>
  )
}

export default App
