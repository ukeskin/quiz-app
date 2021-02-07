import React, {useContext} from 'react'
import {QuizContext} from '../Helpers/Contexts'
import '../App.css'
function Menu() {
    const {setGameState} = useContext(QuizContext)
    return (
        <div className="menu">
            <button onClick={()=> {setGameState("quiz")}}>Start Quiz</button>
        </div>
    )
}

export default Menu
