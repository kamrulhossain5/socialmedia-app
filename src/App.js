<<<<<<< HEAD
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import themeFile from "./util/theme";
import jwtDecode from "jwt-decode";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

// Components
import Navbar from "./components/layout/Navbar";
import AuthRoute from "./util/AuthRoute";

// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import user from "./pages/user";
import axios from "axios";

const theme = createMuiTheme(themeFile);

axios.defaults.baseUrl = 'https://us-central1-socialapp-64e95.cloudfunctions.net/api';
=======
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import jwtDecode from 'jwt-decode';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';
// Components
import Navbar from './components/layout/Navbar';
import themeObject from './util/theme';
import AuthRoute from './util/AuthRoute';
// Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import user from './pages/user';

import axios from 'axios';

const theme = createMuiTheme(themeObject);

axios.defaults.baseURL =
  'https://us-central1-socialapp-64e95.cloudfunctions.net/api';
>>>>>>> Updated Navbar and layout

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
<<<<<<< HEAD
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
=======
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
>>>>>>> Updated Navbar and layout
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <ThemeProvider theme={theme}>
=======
      <MuiThemeProvider theme={theme}>
>>>>>>> Updated Navbar and layout
        <Provider store={store}>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/signup" component={signup} />
                <Route exact path="/users/:handle" component={user} />
<<<<<<< HEAD
                <Route exact path="/users/:handle/post/:postId" component={user} />
=======
                <Route
                  exact
                  path="/users/:handle/scream/:screamId"
                  component={user}
                />
>>>>>>> Updated Navbar and layout
              </Switch>
            </div>
          </Router>
        </Provider>
<<<<<<< HEAD
      </ThemeProvider>
=======
      </MuiThemeProvider>
>>>>>>> Updated Navbar and layout
    );
  }
}

export default App;
