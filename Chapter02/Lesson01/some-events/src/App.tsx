import { useState } from 'react';
import './App.css'

function App() {
  const [hoverText, setHoverText] = useState('ここにマウスを重ねてください');

  // マウスオーバーイベントのハンドラ
  const handleMouseOver = () => {
    setHoverText('マウスオーバー中!');
  };

  const handleMouseOut = () => {
    setHoverText('ここにマウスを重ねてください');
  };


  return (
    <>
      {/* マウスオーバーイベント */}
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}
      >
        {hoverText}
      </div>
    </>
  );
}

export default App
