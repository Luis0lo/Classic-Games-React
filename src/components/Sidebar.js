import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import VideogameAssetSharpIcon from '@mui/icons-material/VideogameAssetSharp';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Sidebar({ setGame }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const isMobileView = window.innerWidth <= 600;
  const topPosition = isMobileView ? 56 : 64;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleGameSelect = (game) => {
    setGame(game);
    handleDrawerClose();
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Toolbar
        sx={{ paddingTop: 1 }}
        style={{ position: 'absolute', top: topPosition, left: 0, zIndex: 2 }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          size="large"
          sx={{ ...(open && { display: 'none' }) }}
        >
          <VideogameAssetSharpIcon fontSize="large" />
        </IconButton>
      </Toolbar>

      <Drawer
        sx={{
          width: 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        PaperProps={{ style: { width: 220, marginTop: topPosition } }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Tic Tac Toe', 'Rock Paper Scissors', 'Sudoku'].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleGameSelect(text)}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
}
