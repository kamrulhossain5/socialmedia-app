<<<<<<< HEAD
import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../images/login-icon.png";
import { Link } from "react-router-dom";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

// Redux Stuff
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

const styles = theme => ({
  ...theme.spreadThis
=======
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';
import { Link } from 'react-router-dom';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
// Redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

const styles = (theme) => ({
  ...theme
>>>>>>> Updated Navbar and layout
});

class login extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      email: "",
      password: "",
=======
      email: '',
      password: '',
>>>>>>> Updated Navbar and layout
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
<<<<<<< HEAD
  handleSubmit = event => {
=======
  handleSubmit = (event) => {
>>>>>>> Updated Navbar and layout
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };
<<<<<<< HEAD
  handleChange = event => {
=======
  handleChange = (event) => {
>>>>>>> Updated Navbar and layout
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
<<<<<<< HEAD
    const { classes, UI: { loading } } = this.props;
    const { errors } = this.state;
=======
    const {
      classes,
      UI: { loading }
    } = this.props;
    const { errors } = this.state;

>>>>>>> Updated Navbar and layout
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
<<<<<<< HEAD
          <img src={AppIcon} alt="lightbulb" className={classes.image} />
=======
          <img src={AppIcon} alt="monkey" className={classes.image} />
>>>>>>> Updated Navbar and layout
          <Typography variant="h2" className={classes.pageTitle}>
            Login
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
<<<<<<< HEAD
              className={classes.TextField}
=======
              className={classes.textField}
>>>>>>> Updated Navbar and layout
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
<<<<<<< HEAD
              className={classes.TextField}
=======
              className={classes.textField}
>>>>>>> Updated Navbar and layout
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Login
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br />
            <small>
              dont have an account ? sign up <Link to="/signup">here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
<<<<<<< HEAD
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(login));
=======
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(login));
>>>>>>> Updated Navbar and layout
