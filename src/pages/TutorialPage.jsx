/* eslint-disable react/prop-types */
import { useState } from "react";
import BackButton from "../components/BackButton";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-3xl md:text-4xl font-bold flex items-center justify-center border border-gray-700 bg-gray-600 text-white hover:bg-gray-700 transition"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner
    ? `Ganador: ${winner}`
    : `Siguiente jugador: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="text-white text-center">
      <h2 className="text-lg md:text-xl font-semibold mb-4">{status}</h2>
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {squares.map((value, index) => (
          <Square key={index} value={value} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen  gap-6 p-4 md:p-6">
      <BackButton />
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md  p-4 md:p-6 rounded-lg shadow-lg text-white h-auto md:h-[60vh] overflow-y-auto">
        <h2 className="text-lg md:text-xl font-semibold text-center mb-3">Movimientos</h2>
        <div className="rounded-lg">
          <table className="w-full overflow-y-auto border border-gray-700 text-white">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-3 md:px-4 py-2 text-left border-b">#</th>
                <th className="px-3 md:px-4 py-2 text-left border-b">Acción</th>
              </tr>
            </thead>
            <tbody>
              {history.map((_, move) => (
                <tr key={move} className="hover:bg-gray-700 transition">
                  <td className="px-3 md:px-4 py-2 border-b text-center">{move}</td>
                  <td className="px-3 md:px-4 py-2 border-b">
                    <button
                      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition"
                      onClick={() => jumpTo(move)}
                    >
                      {move > 0 ? `Ir a mov #${move}` : "Reiniciar"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg  p-5 md:p-6 lg:p-8 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">Tic-Tac-Toe</h1>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
