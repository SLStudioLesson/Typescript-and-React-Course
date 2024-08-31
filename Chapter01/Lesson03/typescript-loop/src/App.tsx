import './App.css'

function App() {

  const fruits:Array<string> = ["りんご", "バナナ", "オレンジ"];
  fruits.push("ぶどう");

  // const newFruits = fruits.map((fruit, index) => 
  //   index + "番目に入っているのは" + fruit
  // );

  // const newFruits = fruits.map((fruit, index) => {
  //   return (
  //     <li>
  //       {index}番目に入っているのは{fruit}
  //     </li>
  //   );
  // });

  // const newFruits = fruits.map((fruit, index) => 
  //   (
  //     <li>
  //       {index}番目に入っているのは{fruit}
  //     </li>
  //   )
  // );

  const newFruits = fruits.map((fruit, index) => {
    const num = index+1;
    return (
      <li>
        {num}番目に入っているのは{fruit}
      </li>
    );
  });

  return (
    <>
      <ul>
        {newFruits}
      </ul>
    </>
  )
}

export default App
