<<<<<<< HEAD
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import MyButton from "../../util/MyButton";

// Redux stuff
import { connect } from "react-redux";
import { editUserDetails } from "../../redux/actions/userActions";

// MUI Stuff
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

// Icons
import EditIcon from "@material-ui/icons/Edit";

const styles = theme => ({
  ...theme.spreadThis,
  button: {
    float: "right"
=======
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';
// Redux stuff
import { connect } from 'react-redux';
import { editUserDetails } from '../../redux/actions/userActions';
// MUI Stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// Icons
import EditIcon from '@material-ui/icons/Edit';

const styles = (theme) => ({
  ...theme,
  button: {
    float: 'right'
>>>>>>> Updated Navbar and layout
  }
});

class EditDetails extends Component {
  state = {
<<<<<<< HEAD
    bio: "",
    website: "",
    location: "",
    open: false
  };
  mapUserDetailsToState = credentials => {
    this.setState({
      bio: credentials.bio ? credentials.bio : "",
      website: credentials.website ? credentials.website : "",
      location: credentials.location ? credentials.location : ""
=======
    bio: '',
    website: '',
    location: '',
    open: false
  };
  mapUserDetailsToState = (credentials) => {
    this.setState({
      bio: credentials.bio ? credentials.bio : '',
      website: credentials.website ? credentials.website : '',
      location: credentials.location ? credentials.location : ''
>>>>>>> Updated Navbar and layout
    });
  };
  handleOpen = () => {
    this.setState({ open: true });
    this.mapUserDetailsToState(this.props.credentials);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    const { credentials } = this.props;
    this.mapUserDetailsToState(credentials);
  }
<<<<<<< HEAD
  handleChange = event => {
=======

  handleChange = (event) => {
>>>>>>> Updated Navbar and layout
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = () => {
    const userDetails = {
      bio: this.state.bio,
      website: this.state.website,
      location: this.state.location
    };
    this.props.editUserDetails(userDetails);
    this.handleClose();
  };
<<<<<<< HEAD

=======
>>>>>>> Updated Navbar and layout
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <MyButton
          tip="Edit Details"
          onClick={this.handleOpen}
          btnClassName={classes.button}
        >
          <EditIcon color="primary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Edit your details</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name="bio"
<<<<<<< HEAD
                type="text"
=======
                tpye="text"
>>>>>>> Updated Navbar and layout
                label="Bio"
                multiline
                rows="3"
                placeholder="A short bio about yourself"
                className={classes.textField}
                value={this.state.bio}
                onChange={this.handleChange}
                fullWidth
<<<<<<< HEAD
              ></TextField>
              <TextField
                name="website"
                type="text"
                label="Website"
                placeholder="Your personal/professional website"
=======
              />
              <TextField
                name="website"
                tpye="text"
                label="Website"
                placeholder="Your personal/professinal website"
>>>>>>> Updated Navbar and layout
                className={classes.textField}
                value={this.state.website}
                onChange={this.handleChange}
                fullWidth
<<<<<<< HEAD
              ></TextField>
              <TextField
                name="location"
                type="text"
=======
              />
              <TextField
                name="location"
                tpye="text"
>>>>>>> Updated Navbar and layout
                label="Location"
                placeholder="Where you live"
                className={classes.textField}
                value={this.state.location}
                onChange={this.handleChange}
                fullWidth
<<<<<<< HEAD
              ></TextField>
=======
              />
>>>>>>> Updated Navbar and layout
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

EditDetails.propTypes = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

<<<<<<< HEAD
const mapStateToProps = state => ({
  credentials: state.user.credentials
});

export default connect(mapStateToProps, { editUserDetails })(
  withStyles(styles)(EditDetails)
);
=======
const mapStateToProps = (state) => ({
  credentials: state.user.credentials
});

export default connect(
  mapStateToProps,
  { editUserDetails }
)(withStyles(styles)(EditDetails));
>>>>>>> Updated Navbar and layout
