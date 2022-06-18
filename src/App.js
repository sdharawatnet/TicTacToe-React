import React, { useState } from 'react'
import './App.css';
import Board from './components/Board'
import ScoreBoard from './components/ScoreBoard';
import Reset from './components/Reset';
function App() {

  const RULES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]


  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true)
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false);
  const handleBlockTap = (blockId) => {
    const updatedBoard = board.map((value, id) => {
      if (id === blockId) {
        return xPlaying === true ? 'X' : 'O'
      } else return value
    })

    const winner = checkWinner(updatedBoard)
    if (winner) {
      if (winner === 'O') {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore })
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore })
      }
    }

    setBoard(updatedBoard)
    setXPlaying(!xPlaying)
  }

  const checkWinner = (board) => {
    let winner;
    RULES.forEach(rule => {
      const [x, y, z] = rule;
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        winner = board[x];
      }
    })
    return winner;
  }

  const resetBoard = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }


  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBlockTap} />
      <Reset resetBoard={resetBoard} />
    </div>
  );
}

export default App;
