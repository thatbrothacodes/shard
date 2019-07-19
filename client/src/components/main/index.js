import React from 'react';
import PropTypes from 'prop-types';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

import Router from '../router';
import { Box } from '@material-ui/core';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#ffffff',
    color: '#000000'
  },
  centerListItem: {
    justifyContent: 'center'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#383838',
    color: '#ffffff'
  },
  fab: {
    margin: theme.spacing(1),
  },
  fillerListItem: {
    flex: '1 0 auto'
  },
  menuList: {
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column'
  },
  toolbar: theme.mixins.toolbar
});

class Main extends React.Component {
  state = {
    open: false,
    selectedIndex: 0
  };

  constructor(props) {
    super(props);

    this.handleOnOverviewIconClick = this.handleOnOverviewIconClick.bind(this);
    this.handleOnExperiencesIconClick = this.handleOnExperiencesIconClick.bind(this);
    this.handleOnSegmentsIconClick = this.handleOnSegmentsIconClick.bind(this);
    this.handleOnInsightsIconClick = this.handleOnInsightsIconClick.bind(this);
    this.handleOnVisitorIconClick = this.handleOnVisitorIconClick.bind(this);

    let index = -1;

    switch (props.location.pathname) {
      case "/experiences":
          index = 1
          break;
      case "/segments":
          index = 2
          break;
      case "/insights":
          index = 3
          break;
      case "/visitor":
          index = 4
          break;
      case "/":
        index = 0
        break;
      default:
    }

    this.state = { selectedIndex: index };
  }

  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  handleOnOverviewIconClick() {
    this.setState(() => { return { selectedIndex: 0 }});
    this.props.history.push('/');
  }

  handleOnExperiencesIconClick() {
    this.setState(() => { return { selectedIndex: 1 }});
    this.props.history.push('/experiences');
  }

  handleOnSegmentsIconClick() {
    this.setState(() => { return { selectedIndex: 2 }});
    this.props.history.push('/segments');
  }

  handleOnInsightsIconClick() {
    this.setState(() => { return { selectedIndex: 3 }});
    this.props.history.push('/insights');
  }

  handleOnVisitorIconClick() {
    this.setState(() => { return { selectedIndex: 4 }});
    this.props.history.push('/visitor');
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={this.props.classes.appBar}>
          <Toolbar>
            <Box display="flex" flexGrow={1} flexDirection="row">
              <Box display="flex" flexGrow={1}>
                <Typography variant="h6" noWrap>
                  Qubit.
                </Typography>
              </Box>
              <Box display="flex" flexGrow={1} alignItems="center" justifyContent="flex-end">
                <FontAwesomeIcon color="#383838" size="lg" icon="bell"/>
                <Fab size="medium" className={this.props.classes.fab}>
                  MS
                </Fab>
                <Typography variant="h7" noWrap>
                  Mark Smith
                </Typography>
                <TextField
                  id="outlined-bare"
                  className={this.props.classes.textField}
                  defaultValue="Bare"
                  margin="normal"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'bare' }}
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          className={this.props.classes.drawer}
          variant="permanent"
          classes={{
            paper: this.props.classes.drawerPaper,
          }}
        >
          <div className={this.props.classes.toolbar} />
          <List className={this.props.classes.menuList}>
              <ListItem button selected={this.state.selectedIndex === 0} key='Overview' onClick={this.handleOnOverviewIconClick}>
                <ListItemIcon><FontAwesomeIcon color="#FFFFFF" icon="network-wired"/></ListItemIcon>
                <ListItemText primary='Overview' />
              </ListItem>
              <Divider />
              <ListItem button selected={this.state.selectedIndex === 1} key='Experiences' onClick={this.handleOnExperiencesIconClick}>
                <ListItemIcon><FontAwesomeIcon color="#FFFFFF" icon="desktop"/></ListItemIcon>
                <ListItemText primary='Experiences' />
              </ListItem>
              <Divider />
              <ListItem button selected={this.state.selectedIndex === 2} key='Segments' onClick={this.handleOnSegmentsIconClick}>
                <ListItemIcon><FontAwesomeIcon color="#FFFFFF" icon="users"/></ListItemIcon>
                <ListItemText primary='Segments' />
              </ListItem>
              <Divider />
              <ListItem button selected={this.state.selectedIndex === 3} key='Insights' onClick={this.handleOnInsightsIconClick}>
                <ListItemIcon><FontAwesomeIcon color="#FFFFFF" icon="chart-bar"/></ListItemIcon>
                <ListItemText primary='Insights' />
              </ListItem>
              <Divider />
              <ListItem button selected={this.state.selectedIndex === 4} key='Visitor' onClick={this.handleOnVisitorIconClick}>
                <ListItemIcon><FontAwesomeIcon color="#FFFFFF" icon="cloud"/></ListItemIcon>
                <ListItemText primary='Visitor Cloud' />
              </ListItem>
          </List>
        </Drawer>
        <main className={this.props.classes.content}>
          <div className={this.props.classes.toolbar} />
          <Router />
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles, { withTheme: true })(Main));
