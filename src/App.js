import { useState } from 'react';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './components/Sidebar';
import { Grid } from '@mui/material';
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
          spacing={2}
          marginTop={1}
        >
          <Grid item>
            <TicTacToe />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;

{
  /* <Grid container justify='center' border={1} style={{ textAlign: 'center' }}  >
          <Grid item style={{ marginLeft: 140 }} border={2}>
            <h1>Title</h1>
          </Grid>
          <Grid item>
            <h1>title 2</h1>
          </Grid>
        </Grid> */
}
