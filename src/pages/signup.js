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
import { signupUser } from '../redux/actions/userActions'

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
import { signupUser } from '../redux/actions/userActions';

const styles = (theme) => ({
  ...theme
>>>>>>> Updated Navbar and layout
});

class signup extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
=======
      email: '',
      password: '',
      confirmPassword: '',
      handle: '',
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
    this.setState({
      loading: true
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle
    };
<<<<<<< HEAD
    this.props.signupUser(newUserData, this.props.history)
  };
  handleChange = event => {
=======
    this.props.signupUser(newUserData, this.props.history);
  };
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
          <Typography variant="h2" className={classes.pageTitle}>
            Signup
=======
          <img src={AppIcon} alt="monkey" className={classes.image} />
          <Typography variant="h2" className={classes.pageTitle}>
            SignUp
>>>>>>> Updated Navbar and layout
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
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
<<<<<<< HEAD
              className={classes.TextField}
=======
              className={classes.textField}
>>>>>>> Updated Navbar and layout
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="handle"
              name="handle"
              type="text"
              label="Handle"
<<<<<<< HEAD
              className={classes.TextField}
=======
              className={classes.textField}
>>>>>>> Updated Navbar and layout
              helperText={errors.handle}
              error={errors.handle ? true : false}
              value={this.state.handle}
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
<<<<<<< HEAD
              Signup
=======
              SignUp
>>>>>>> Updated Navbar and layout
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br />
            <small>
<<<<<<< HEAD
              Already have an account ? login <Link to="/login">here</Link>
=======
              Already have an account ? Login <Link to="/login">here</Link>
>>>>>>> Updated Navbar and layout
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

signup.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
<<<<<<< HEAD
})

export default connect(mapStateToProps, { signupUser })(withStyles(styles)(signup));
=======
});

export default connect(
  mapStateToProps,
  { signupUser }
)(withStyles(styles)(signup));
>>>>>>> Updated Navbar and layout
