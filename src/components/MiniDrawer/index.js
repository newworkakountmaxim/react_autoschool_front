import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import NotificationImportant from '@material-ui/icons/NotificationImportant';
import ExitToApp from '@material-ui/icons/ExitToApp';
import SentimentDissatisfied from '@material-ui/icons/SentimentDissatisfied';

import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SearchAppBar from "../SearchAppBar";
import UserAvatar from "../UserAvatar";
import FloatingActionButtonZoom from "../FloatingActionButtonZoom";


const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    

    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,    
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  logo: {
    color: '#222',
    fontWeight: 'bold',
    marginRight: 'auto',
    marginLeft: '0.5em',
    fontSize: '1.7em',
  },
  
});

class MiniDrawer extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        
        <AppBar
          position="fixed"          
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <div>A</div>
              <MenuIcon />
            </IconButton>
            
            <div className="headercenter">
            <SearchAppBar />

            <div>
              <Fab color="primary" aria-label="Add" className={classes.fab}>
                <UserAvatar />
              </Fab>  
              <Fab color="primary" aria-label="Add" className={classes.fab}>
                  <Badge badgeContent={11} color="secondary">
                    <MailIcon />
                  </Badge>  
              </Fab>
              <Fab color="primary" aria-label="Add" className={classes.fab}>
                  <Badge badgeContent={5} color="secondary">
                    <NotificationImportant />
                  </Badge>  
              </Fab>
              <Fab color="primary" aria-label="Add" className={classes.fab}>
                  <Badge badgeContent={4} color="secondary">
                    <FavoriteBorder />
                  </Badge>  
              </Fab>
              <Fab color="primary" aria-label="Add" className={classes.fab}>                
                  <ExitToApp />              
              </Fab>
            </div>
            </div>
            

          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>            
            <div className={classes.logo}>TipaLogo</div>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Главная','Запись на практическое занятие','Контакты'].map((text, index, icon) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container spacing={24}>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <FloatingActionButtonZoom />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                
              </Grid>  
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                
                <IconButton>
                    <SentimentDissatisfied />
                </IconButton>

                Telegram не дает возможности транслировать чат на Веб-страницу Telegram не дает возможности транслировать чат на Веб-страницуTelegram не дает возможности транслировать чат на Веб-страницуTelegram не дает возможности транслировать чат на Веб-страницуTelegram не дает возможности транслировать чат на Веб-страницуTelegram не дает возможности транслировать чат на Веб-страницуTelegram не дает возможности транслировать чат на Веб-страницу
                
              </Paper>
              <Paper className={classes.paper}>Viber</Paper>                 
            </Grid>  
          </Grid>
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);