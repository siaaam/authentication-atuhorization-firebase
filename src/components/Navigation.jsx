import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Firebase Auth
          </Typography>
          <Button
            component={NavLink}
            to="/register"
            sx={{ '&.active': { bgcolor: 'primary.dark' } }}
            color="inherit"
          >
            Register
          </Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Private</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
