import { useState } from 'react';
import Board from './components/Board';
import BoardHistory from './components/BoardHistory';
import GameStatus from './components/GameStatus';
import PlayerForm from './components/PlayerForm';


const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = (board) => {
  for(const combination of winningCombinations){
    const [first, second, third] = combination;
    if(board[first] && board[first] === board[second] && board[first] === board[third]){
      return {winner: board[first], winningSquares: [first, second, third]}
    }
  }
  return {winner: null, winningSquares: []}
}

const initialBoard = Array(9).fill(null)

const App = () => {
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState({playerOne: "", playerTwo: ""});
  const [board, setBoard] = useState(initialBoard);
  const [started, setStarted] = useState(false);
  const {winner, winningSquares} = calculateWinner(board);
  const [history, setHistory] = useState([]);

  const nextPlayer = player === players.playerOne ? players.playerTwo : players.playerOne;

  const addPlayer = e => {
    const name = e.target.name;
    const value = e.target.value;
    setPlayers((prev) => ({...prev, [name]: value}))
  }

  const handleClick = (event, index) => {
    if(board[index] || winner || !started) return;
    const boardStatus = [...board];
    boardStatus[index] = player
    setBoard(boardStatus);
    setHistory((prev) => [...prev, {player, value: index}]);
    setPlayer(nextPlayer);
    //if tie - reset
  }

  const initGame = (e) => {
    e.preventDefault();
    resetGame();
  }

  const resetGame = () => {
    setBoard(initialBoard);
    setPlayer(Object.values(players)[Math.floor(Math.random(0,1) * 2)])
    setStarted(true);
    setHistory([]);
  }

  return (
    <>
      <PlayerForm started={started} initGame={initGame} players={players} addPlayer={addPlayer} />
      <GameStatus winner={winner} winningSquares={winningSquares} resetGame={resetGame} player={player} history={history} />
      <Board board={board} handleClick={handleClick} winningSquares={winningSquares} />
      <BoardHistory history={history} />
    </>
  )
}

export default App
