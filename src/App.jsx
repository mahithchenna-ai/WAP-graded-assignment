import { useState } from 'react'
import './App.css'

function App() {
  let [userMove,setUserMove] = useState("")
  let [computerMove, setComputerMove] = useState("")
  let [winner, setWinner] = useState("")
  let [playerPoint,setplayerPoints] = useState(0)
  let [compPoints,setCompPoints] = useState(0)
  let [rounds, setRounds] = useState(0)

  let emojis = {"Rock": "🪨", "Scissor": "✂️", "Paper": "📃"}

  function generateMove() {
    let value = Math.random();
    if (value <= 0.33){
      return "Rock";
    }else if (value <= 0.67){
      return "Paper";
    }else{
      return "Scissor";
    }
  }

  let handleRock = () => {
    let ans = generateMove()
    setUserMove("Rock")
    setComputerMove(ans)
    Winner("Rock", ans)
    setRounds(rounds + 1)
  }

  let handlePaper = () => {
    let ans = generateMove()
    setUserMove("Paper")
    setComputerMove(ans)
    Winner("Paper", ans)
    setRounds(rounds + 1)
  }

  let handleScissor = () => {
    let ans = generateMove()
    setUserMove("Scissor")
    setComputerMove(ans)
    Winner("Scissor", ans)
    setRounds(rounds + 1)
  }

  let Winner = (user, computer) => {
    if (user === computer){
      setWinner("It's a Draw")
      return;
    }

    if (
      (user === "Rock" && computer === "Scissor") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissor" && computer === "Paper")
    ) {
      setplayerPoints(playerPoint + 1);
      setWinner("Player Wins")
    } else {
      setCompPoints(compPoints + 1);
      setWinner("Computer Wins")
    }
  }

  let resetGame = () => {
    setUserMove("")
    setComputerMove("")
    setWinner("")
    setplayerPoints(0)
    setCompPoints(0)
    setRounds(0)
  }

  return (
    <div>
      <h1>Computer : Player1</h1>

      <h1>Points:</h1>
      <h2>{playerPoint} | {compPoints}</h2>

      <h1>Rounds Played: {rounds}</h1>

      <h1>Move:</h1>
      <h1>{emojis[computerMove]}:{emojis[userMove]}</h1>

      <h1>{winner}</h1>

      <button onClick={handleRock}>🪨</button>
      <button onClick={handlePaper}>📃</button>
      <button onClick={handleScissor}>✂️</button>
      <button onClick={resetGame}>Reset</button>
    </div>
  )
}

export default App