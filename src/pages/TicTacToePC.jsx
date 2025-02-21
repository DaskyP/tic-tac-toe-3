/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";

function Square({ value, onClick }) {
  return (
    <button
      className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-4xl font-bold flex items-center justify-center border border-gray-700 bg-gray-800 text-white hover:bg-gray-700 transition"
      onClick={onClick}
      disabled={value !== null} 
    >
      {value}
    </button>
  );
}

export default function TicTacToePC() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [status, setStatus] = useState("Tu turno (X)");

  useEffect(() => {
    if (!isPlayerTurn && !calculateWinner(squares)) {
      const timeout = setTimeout(() => makeComputerMove(), 500);
      return () => clearTimeout(timeout);
    }
  }, [isPlayerTurn, squares]);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares) || !isPlayerTurn) return;
    
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
    setIsPlayerTurn(false);
  }

  function makeComputerMove() {
    if (calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    const bestMove = getBestMove(nextSquares);

    if (bestMove !== null) {
      nextSquares[bestMove] = "O"; 
    }

    setSquares(nextSquares);
    setIsPlayerTurn(true);
  }

  function getBestMove(board) {
    const emptySquares = board.map((val, index) => (val === null ? index : null)).filter(val => val !== null);

    for (let i of emptySquares) {
      const tempBoard = [...board];
      tempBoard[i] = "O";
      if (calculateWinner(tempBoard) === "O") return i;
    }

    for (let i of emptySquares) {
      const tempBoard = [...board];
      tempBoard[i] = "X";
      if (calculateWinner(tempBoard) === "X") return i;
    }

    return emptySquares.length > 0 ? emptySquares[Math.floor(Math.random() * emptySquares.length)] : null;
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsPlayerTurn(true);
  }

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setStatus(`Ganador: ${winner}`);
    } else if (squares.every(square => square !== null)) {
      setStatus("¡Empate!");
    } else {
      setStatus(isPlayerTurn ? "Tu turno (X)" : "Turno de la PC...");
    }
  }, [squares, isPlayerTurn]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <BackButton />

      <h1 className="text-3xl font-bold text-white mb-4">Tic-Tac-Toe vs PC</h1>
      <p className="text-xl text-white mb-6">{status}</p>
      
      <div className="grid grid-cols-3 gap-3">
        {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>

      <button
        onClick={resetGame}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Reiniciar Juego
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
