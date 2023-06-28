import Square from '../Square';
import css from './board.module.css';

const Board = ({ board, setBoard, nextPlayer, setNextPlayer, winner }) => {
  return (
    <div className={css.board} data-testid="boardContainer">
      {board.map((square, index) => {
        return (
          <Square
            winner={winner}
            key={index}
            value={square}
            setBoard={setBoard}
            index={index}
            board={board}
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
          />
        );
      })}
    </div>
  );
};

export default Board;
