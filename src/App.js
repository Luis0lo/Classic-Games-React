import { useState } from 'react';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './components/Sidebar';
import { Grid } from '@mui/material';

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
        <Grid container>
          <Grid item style={{ marginLeft: 140 }}>
          {/* <Grid> */}
            <h1>Title</h1>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
