import {useState} from "react";

function App() {
const [likes, setLikes] = useState(0);
  return (
    <>
        <div>Jestem Groszek, a o to mój licznik lajków! </div>
        <p>Liczba lajków:{likes}</p>
        <button onClick={() => setLikes(likes + 1)} >Polub ❤️</button>
        <button onClick={() => setLikes(likes > 0 ? likes - 1 : 0)}>Odlub 💔</button>
    </>
  )
}

export default App
