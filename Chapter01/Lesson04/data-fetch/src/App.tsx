import './App.css'

function App() {

  fetch('https://jsonplaceholder.typicode.com/users123')
      .then(response => {
        return response.json()
      })
      .then((data) => {
        data.map( (user) => {
          console.log(user.username);
        })
      })
      .catch(error => console.error('エラーが発生しました。:', error));
      
  return (
    <>
      <h1>fetchを使った<br />HTTP通信の学習</h1>
    </>
  )
}

export default App
