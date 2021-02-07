import React, {useState} from 'react'
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

import { QuizContext } from './Helpers/Contexts'

export default function App() {
  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState(0)
  return (
    <div className="App">
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  )
}
