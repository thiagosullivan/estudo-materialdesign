import React from 'react'
import { 
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Drawer,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

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
    zIndex: theme.zIndex.drawer + 1,
  },
  logo:{
    height: 30,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
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
  },
  listItemText: {
    fontSize: 14,
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
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon>{<Home />}</ListItemIcon>
              <ListItemText classes={{
                primary: classes.listItemText,
              }} primary={'Início'} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
              <ListItemText classes={{
                primary: classes.listItemText,
              }} primary={'Em alta'} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
              <ListItemText classes={{
                primary: classes.listItemText,
              }} primary={'Inscrição'} />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  )
}

export default Home;
