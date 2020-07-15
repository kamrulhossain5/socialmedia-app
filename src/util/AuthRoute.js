<<<<<<< HEAD
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
=======
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
>>>>>>> Updated Navbar and layout

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
<<<<<<< HEAD
    render={props =>
=======
    render={(props) =>
>>>>>>> Updated Navbar and layout
      authenticated === true ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
<<<<<<< HEAD
})

AuthRoute.propTypes = {
  user: PropTypes.object
}
=======
});

AuthRoute.propTypes = {
  user: PropTypes.object
};
>>>>>>> Updated Navbar and layout

export default connect(mapStateToProps)(AuthRoute);
