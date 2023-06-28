import css from './square.module.css';
import {Paper} from '@mui/material'

const Square = ({
  value,
  setBoard,
  index,
  board,
  nextPlayer,
  setNextPlayer,
  winner,
}) => {
  function handleClick() {
    if (value || winner) {
      return;
    }

    let newBoard = [
      ...board.slice(0, index),
      nextPlayer,
      ...board.slice(index + 1),
    ];
    setBoard(newBoard);
    changePlayer(nextPlayer);
  }

  function changePlayer(currentPlayer) {
    if (currentPlayer === 'X') {
      setNextPlayer('O');
    } else {
      setNextPlayer('X');
    }
  }

  return (
    <Paper className={css.square} onClick={handleClick}>
      {value}
    </Paper>
  );
};

export default Square;
