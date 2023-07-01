import { useState } from 'react';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './components/Sidebar';
import { Grid, Paper } from '@mui/material';
import TicTacToe from './games/TicTacToe';
import RockPaperScissors from './games/RockPaperScissors.js';
import Sudoku from './games/Sudoku.js';

function App() {
  const [game, setGame] = useState('Tic Tac Toe');
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const GameComponent = () => {
    const gameComponents = {
      'Tic Tac Toe': TicTacToe,
      'Rock Paper Scissors': RockPaperScissors,
      'Sudoku': Sudoku,
    };
  
    const SelectedGame = gameComponents[game] || null;
  
    return SelectedGame ? <SelectedGame /> : null;
  };
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Navbar check={darkMode} change={() => setDarkMode(!darkMode)} />
        <Sidebar setGame={setGame} />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Grid item padding={2}>
            <Paper sx={{ padding: 2 }}>
              <GameComponent />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
