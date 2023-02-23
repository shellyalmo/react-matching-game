import { useState } from "react";
import { celebrities } from "./database";
import "./App.css";
import Score from "./components/Score";
import CharacterCard from "./components/CharacterCard";

function App() {
  const [goodPoints, setGoodPoints] = useState(0);
  const [badPoints, setBadPoints] = useState(0);
  const celebImg = celebrities[0].image;
  const celebDesc = celebrities[0].description;
  return (
    <div className="App">
      <Score goodPoints={goodPoints} badPoints={badPoints} />
      <CharacterCard img={celebImg} desc={celebDesc} />
    </div>
  );
}

export default App;
