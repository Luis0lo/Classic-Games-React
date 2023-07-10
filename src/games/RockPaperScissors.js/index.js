import { useState } from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';

export default function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState('rock');
  const [computerChoice, setComputerChoice] = useState('rock');
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState(`Let's PLay!`);
  const [gameOver, setGameOver] = useState(false);

  const choices = ['rock', 'paper', 'scissors'];

  const handleClick = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();

    const comboMoves = choice + computerChoice;

    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === 'rockscissors' ||
        comboMoves === 'paperrock' ||
        comboMoves === 'scissorspaper'
      ) {
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult('User Point');
        if (updatedUserPoints === 5) {
          setGameOver(true);
          setResult('User Wins');
          setTurnResult('');
        }
      } else if (
        comboMoves === 'paperscissors' ||
        comboMoves === 'scissorsrock' ||
        comboMoves === 'rockpaper'
      ) {
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        setTurnResult('Computer Point');
        if (updatedComputerPoints === 5) {
          setGameOver(true);
          setResult('Computer Wins');
          setTurnResult('');
        }
      } else {
        setTurnResult('Draw');
      }
    }
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const reset = () => {
    setUserPoints(0);
    setComputerPoints(0);
    setResult(null);
    setGameOver(false);
  };

  return (
    <Box
      style={{
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ m: 2 }}>
        Rock Paper Scissors
      </Typography>
      <Box display="flex" justifyContent="space-around">
        <Typography variant="h5">User: {userPoints}</Typography>
        <Typography variant="h5">Computer: {computerPoints}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-around" sx={{ m: 2 }}>
        <Paper className="choiceUser">
          <img
            width="100"
            className="userHand"
            src={`../images/${userChoice}.png`}
            alt="userHand"
          />
        </Paper>
        <Paper className="choiceComputer">
          <img
            style={{ transform: 'rotatey(180deg)' }}
            width="100"
            className="computerHand"
            src={`../images/${computerChoice}.png`}
            alt="computerHand"
          />
        </Paper>
      </Box>
      <Box sx={{ m: 2 }}>
        {choices.map((choice, index) => (
          <Button
            variant="contained"
            key={index}
            onClick={() => handleClick(choice)}
            sx={{ m: 1 }}
          >
            {choice}
          </Button>
        ))}
      </Box>
      <Box>
        <Typography variant="h4" style={{ textAlign: 'center' }}>
          {turnResult}
        </Typography>
        <Typography variant="h4" style={{ textAlign: 'center' }}>
          {result}
        </Typography>
      </Box>
      <Box>
        {gameOver && (
          <Button color='success' variant="contained" onClick={() => reset()}>
            Start Again
          </Button>
        )}
      </Box>
    </Box>
  );
}
