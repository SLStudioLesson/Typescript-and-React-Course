import './App.css'

function App() {

  interface ProfileProps {
    imageUrl?: string;
    name: string;
    occupation: string;
    hobbies?: Array<string>;
  }

  // プロパティの型を定義
  // type ProfileProps = {
  //   imageUrl: string,
  //   name: string,
  //   occupation: string,
  //   hobbies: string,
  // }

  
  const ProfileCard = ({imageUrl = 'vite.svg', name, occupation, hobbies}: ProfileProps) => {

    return (
      <div className="card">
        <img src={imageUrl} alt="プロフィール画像" />
        <h2 className='title'>{name}</h2>
        <div>
          <p>職業: {occupation}</p>
          <p>趣味: {hobbies?.join(", ")}</p>
        </div>
        <p><button>Contact</button></p>
      </div>
    )
  }

  return (
    <>
      <ProfileCard 
        name="山田 太郎" 
        occupation="プロジェクトマネージャー" 
        hobbies={["プログラミング","読書"]}
      />
      <ProfileCard name="鈴木 花子" occupation="ソフトウェアエンジニア" />
    </>
  )
}

export default App
