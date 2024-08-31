import './App.css'

function App() {

  type Person = {
    name: string,
    city: string,
    birthday: string,
  }

  const people:Array<Person> = [
    {name: "山田", city: "東京都", birthday: "2000年01月01日"},
    {name: "田中", city: "大阪府", birthday: "2002年02月02日"},
  ];

  return (
    <>
      <h1>名簿</h1>
      <table>
        <thead>
          <th>名前</th>
          <th>都道府県</th>
          <th>生年月日</th>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.city}</td>
              <td>{person.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
