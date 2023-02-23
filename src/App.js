import { useState } from "react";
import { celebrities } from "./database";
import "./App.css";
import Score from "./components/Score";
import CharacterCard from "./components/CharacterCard";
import Voting from "./components/Voting";

function App() {
  const [goodPoints, setGoodPoints] = useState(0);
  const [badPoints, setBadPoints] = useState(0);
  const [currentCelebrityIndex, setCurrentCelebrityIndex] = useState(0);
  const [currentCelebrity, setCurrentCelebrity] = useState(
    celebrities[currentCelebrityIndex]
  );

  const celebImg = celebrities[currentCelebrityIndex].image;
  const celebDesc = celebrities[currentCelebrityIndex].description;
  return (
    <div className="App">
      <Score goodPoints={goodPoints} badPoints={badPoints} />
      <CharacterCard img={celebImg} desc={celebDesc} />
      <Voting
        goodPoints={goodPoints}
        badPoints={badPoints}
        setGoodPoints={setGoodPoints}
        setBadPoints={setBadPoints}
        currentCelebrityIndex={currentCelebrityIndex}
        setCurrentCelebrityIndex={setCurrentCelebrityIndex}
        currentCelebrity={currentCelebrity}
        setCurrentCelebrity={setCurrentCelebrity}
        celebrities={celebrities}
      />
    </div>
  );
}

export default App;
