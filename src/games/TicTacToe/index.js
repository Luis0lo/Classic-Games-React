import { useState, useEffect } from 'react';
import Board from './Board';
import PlayButton from './Button';
import { Typography, Box } from '@mui/material';

function TicTacToe() {
  const [nextPlayer, setNextPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));

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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    if (squares.every((square) => square !== null)) {
      return 'DRAW';
    }

    return null;
  }

  useEffect(() => {
    let result = calculateWinner(board);
    if (result !== null) {
      setWinner(result);
    }
  }, [board]);

  return (
    <Box
      style={{
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" style={{ textAlign: 'center' }}>
        Tic Tac Toe
      </Typography>
      {winner === 'DRAW' ? (
        <div>Result: {winner}</div>
      ) : winner ? (
        <div>🎉 Winner: {winner} 🎉</div>
      ) : (
        <div>&nbsp;</div>
      )}
      <Board
        winner={winner}
        setBoard={setBoard}
        board={board}
        nextPlayer={nextPlayer}
        setNextPlayer={setNextPlayer}
      />
      {/* {!winner && <div> Next Player: {nextPlayer}</div>} */}

      {winner ? (
        <PlayButton
          setBoard={setBoard}
          setWinner={setWinner}
          setNextPlayer={setNextPlayer}
        />
      ) : (
        <div> Next Player: {nextPlayer}</div>
      )}
    </Box>
  );
}

export default TicTacToe;
