import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar/Navbar';
import { withUser, update } from './services/withUser';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import SmackTalk from "./pages/SmackTalk";
import ChoreForm from "./pages/ChoreForm";
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import './css/App.css';

class App extends Component {
  componentDidMount() {
    axios.get('/api/auth')
      .then(res => {
        update(res.data);
      })
      .catch(err => {
        if (err.response.status === 401) {
          update(null);
        }
      });
  }
  render() {
    const { user } = this.props;
    return (
      <Router>
        <MuiThemeProvider>
          <Fragment>
            <Navbar
              user={user}
            />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/create" component={CreateAccountPage} />
              <Route exact path="/choreform" component={ChoreForm} />
              <Route exact path="/smacktalk" component={SmackTalk} />
              <Route exact path="/calendar" component={Calendar} />
              <Route component={NotFoundPage} />
            </Switch>
          </Fragment>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default withUser(App);