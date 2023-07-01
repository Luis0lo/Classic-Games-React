import { useState } from 'react';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './components/Sidebar';
import { Grid, Paper } from '@mui/material';
import TicTacToe from './games/TicTacToe';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Navbar check={darkMode} change={() => setDarkMode(!darkMode)} />
        <Sidebar />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Grid item padding={2}>
            <Paper sx={{ padding: 2 }}>
              <TicTacToe />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;

