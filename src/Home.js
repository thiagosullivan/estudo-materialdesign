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
  ListItemText,
  ListSubheader,
  Box
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';

import AddCircle from '@material-ui/icons/AddCircle';

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
  },
  listitem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
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
      <Box display="flex">
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
              <ListItem button classes={{root: classes.listitem}}>
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText,
                }} primary={'Início'} />
              </ListItem>
              <ListItem button classes={{root: classes.listitem}}>
                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText,
                }} primary={'Em alta'} />
              </ListItem>
              <ListItem button classes={{root: classes.listitem}}>
                <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText,
                }} primary={'Inscrição'} />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button classes={{root: classes.listitem}}>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText,
                }} primary={'Biblioteca'} />
              </ListItem>
              <ListItem button classes={{root: classes.listitem}}>
                <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText,
                }} primary={'Histórico'} />
              </ListItem>
            </List>
            <Divider />
            <Box p={7}>
              <Typography variant="body2">
                Faça login para curtir vídeos, comentar e se inscrever
              </Typography>
              <Box mt={2}>
                <Button
                  variant='outlined'
                  color='secondary'
                  startIcon={<AccountCircleIcon />}
                >
                  Fazer Login
                </Button>
              </Box>
            </Box>
            <Divider />
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader
                  component='div'
                  id='nested-list-subheader'
                  className={classes.subheader}
                >
                  O melhor do youtube
                </ListSubheader>
              }
            >
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText primary={'Música'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText primary={'Esportes'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText primary={'Jogos'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText primary={'Filmes'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText primary={'Notícias'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText primary={'Ao vivo'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText primary={'Destaques'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText primary={'Videos 360'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText primary={'Procurar mais'} />
              </ListItem>
            </List>
          </div>
        </Drawer>

        <Box p={4}>
          <Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 800 }}
          >
            Recomendados
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Home;
