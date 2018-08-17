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
import CommentBox from "./pages/chat";

const App = () => (
  <Router>
    <div>
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/smacktalk" component={CommentBox} />
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
