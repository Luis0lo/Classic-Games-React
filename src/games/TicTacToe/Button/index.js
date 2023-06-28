import Button from '@mui/material/Button';

const PlayButton = ({ setBoard, setWinner, setNextPlayer }) => {
  const handleClick = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setNextPlayer('X');
  };
  return (
    <Button variant="contained" onClick={handleClick} data-testid="button">
      Play again
    </Button>
  );
};

export default PlayButton;
