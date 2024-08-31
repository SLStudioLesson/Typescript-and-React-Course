import './App.css'

function App() {

  // 学生の点数リスト
  const scores: number[] = [85, 62, 93, 47, 75, 89, 54, 71, 98, 60];

  // 合格点（70点以上）の点数だけを抽出
  const passingScores: number[] = scores.filter((score) => {
     return score >= 70;
  });

  const total:number = scores.reduce((acc, current)=> {
    return acc + current;
  });

  return (
    <>
      <h2>全ての点数</h2>
      【 {scores.map( score => (<span>{score}点 </span>)) }】
      <h2>70点以上の合格者</h2>
      【 {passingScores.map(score=>(<span>{score}点 </span>))}】
      <h2>合格者数 / 受験者数</h2>
      <p>{passingScores.length}人 / {scores.length}人</p>
      <h2>合計得点</h2>
      <p>{total}点</p>
    </>
  )
}

export default App
