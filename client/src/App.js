import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import SmackTalk from "./pages/SmackTalk";
import ChoreForm from "./pages/ChoreForm";
import Calendar from "./pages/Calendar";
import Wrapper from "./components/Wrapper";
//import C from "./pages/chat";
// import Auth from './Auth/Auth.js';
// import React, { Component } from 'react';
// import { Navbar, Button } from 'react-bootstrap';
import './css/App.css';


const App = () => (
  <Router>
    <div>
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/smacktalk" component={SmackTalk} />
        <Route exact path="/choreform" component={ChoreForm} />
      </Wrapper>
    </div>
  </Router>
);

// class App extends Component {
//   goTo(route) {
//     this.props.history.replace(`/${route}`)
//   }

//   login() {
//     this.props.auth.login();
//   }

//   logout() {
//     this.props.auth.logout();
//   }

//   render() {
//     const { isAuthenticated } = this.props.auth;

//     return (
//       <div>
//         <Navbar fluid>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="#">Auth0 - React</a>
//             </Navbar.Brand>
//             <Button
//               bsStyle="primary"
//               className="btn-margin"
//               onClick={this.goTo.bind(this, 'home')}
//             >
//               Home
//             </Button>
//             {
//               !isAuthenticated() && (
//                   <Button
//                     bsStyle="primary"
//                     className="btn-margin"
//                     onClick={this.login.bind(this)}
//                   >
//                     Log In
//                   </Button>
//                 )
//             }
//             {
//               isAuthenticated() && (
//                   <Button
//                     bsStyle="primary"
//                     className="btn-margin"
//                     onClick={this.logout.bind(this)}
//                   >
//                     Log Out
//                   </Button>
//                 )
//             }
//           </Navbar.Header>
//         </Navbar>
//       </div>
//     );
//   }
// }
// const auth = new Auth();
// auth.login();




export default App;
import './css/App.css';
import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { withUser, update } from './services/withUser';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import SmackTalk from "./pages/SmackTalk";
import ChoreForm from "./pages/ChoreForm";
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  componentDidMount() {
    // this is going to double check that the user is still actually logged in
    // if the app is reloaded. it's possible that we still have a user in sessionStorage
    // but the user's session cookie expired.
    axios.get('/api/auth')
      .then(res => {
        // if we get here, the user's session is still good. we'll update the user
        // to make sure we're using the most recent values just in case
        update(res.data);
      })
      .catch(err => {
        // if we get a 401 response, that means the user is no longer logged in
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
