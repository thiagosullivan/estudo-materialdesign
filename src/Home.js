import React from 'react'
import { AppBar, Button, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  appBar: {
    boxShadow: "none",
  },
  logo:{
    height: 30,
  },
  menuIcon: {
    paddingRight: theme.spacing(5),    
    paddingLeft: theme.spacing(6),
  },
  icon: {
    paddingRight: theme.spacing(5),    
  },
  grow: {
    flexGrow: 1,
  }

}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src="./assets/black.png" alt="logo" className={classes.logo}/>
          <div className={classes.grow} />
          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <AppsIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <VideoCallIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <MoreVertIcon />
          </IconButton>
          <Button startIcon={<AccountCircleIcon />} variant="outlined" color="secondary">
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Home
