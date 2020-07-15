<<<<<<< HEAD
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import CreatePost from '../post/CreatePost';
import Notifications from "./Notifications";

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";

// Icons
import HomeIcon from "@material-ui/icons/Home";

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar>
        <ToolBar className="nav-container">
          {authenticated ? (
            <Fragment>
              <CreatePost/>
              <Link to="/">
                <MyButton tip="Home!">
                  <HomeIcon />
                </MyButton>
              </Link>
                <Notifications />
            </Fragment>
          ) : (
            <Fragment>
=======
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import CreatePost from '../post/CreatePost';
import Notifications from './Notifications';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    // marginRight: theme.spacing(2),
    flexGrow: 1
  },
  menuButton: {
    marginLeft: '95px'
  },
  signup: {
    marginRight: '90px'
  }
});

class Navbar extends Component {
  render() {
    const { classes, authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar>
          {authenticated ? (
            <Fragment>
              <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                <DashboardIcon />
              </IconButton>
              <Typography color="inherit" variant="h6" className={classes.title}>
                POST IT
              </Typography>
              <IconButton style={{color: 'white'}}>
                <CreatePost />
              </IconButton>
              <IconButton>
                <Link to="/" color="white">
                  <MyButton tip="Home" color="inherit">
                    <HomeIcon />
                  </MyButton>
                </Link>
              </IconButton>
              <IconButton className={classes.signup} style={{color: 'white'}}> 
                <Notifications />
              </IconButton>
            </Fragment>
          ) : (
            <Fragment>
              <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                <DashboardIcon />
              </IconButton>
              <Typography color="inherit" variant="h6" className={classes.title}>
                POST IT
              </Typography>
>>>>>>> Updated Navbar and layout
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
<<<<<<< HEAD
              <Button color="inherit" component={Link} to="/signup">
=======
              <Button className={classes.signup} color="inherit" component={Link} to="/signup">
>>>>>>> Updated Navbar and layout
                Signup
              </Button>
            </Fragment>
          )}
<<<<<<< HEAD
        </ToolBar>
=======
        </Toolbar>
>>>>>>> Updated Navbar and layout
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

<<<<<<< HEAD
export default connect(mapStateToProps)(Navbar);
=======
export default connect(mapStateToProps)(withStyles(styles)(Navbar));
>>>>>>> Updated Navbar and layout
