import './App.css'

function App() {
  
  const suuji01:number = 777;
  
  console.log("デバッグするよ！");
  console.log(suuji01);
  
  
  return (
    <>
      <h1>Typescriptから始めるプログラマ生活</h1>

      <p>変数(suuji01)は <strong className='answer'>{suuji01}</strong></p>

      <p>1234 たす 5678 は <strong className='answer'>{1234 + 5678}</strong></p>
      <p>40 ひく 23 は <strong className='answer'>{40 - 23}</strong></p>
      <p>2 かける 3 かける 10 は <strong className='answer'>{2 * 3 * 10}</strong></p>
      <p>1000 わる 250 は <strong className='answer'>{1000 / 250}</strong></p>
      <p>10 わる 3 の あまりは <strong className='answer'>{10 % 3}</strong></p>
    </>
  )
}

export default App
