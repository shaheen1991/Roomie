import React, {Component} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Form} from 'react-bootstrap';

class Login extends Component{

  state={
    usernameVal:"",
    passwordVal:""
  }
  getValidationState = ()=> {
    const length = this.state.usernameVal.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleUsernameChange =(e)=> {
    this.setState({ usernameVal: e.target.value });
    console.log("STATE: ", this.state.usernameVal)
  }

  handlePasswordChange =(e)=> {
    this.setState({ passwordVal: e.target.value });
    console.log("STATE: ", this.state.passwordVal)
  }

  render(){
    return(
      <div>
        <container id = "loginForm">
          <form>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Username</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Username"
                onChange={this.handleUsernameChange}
                 />
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                value={this.state.value}
                placeholder="Password"
                onChange={this.handlePasswordChange}
                />
              <FormControl.Feedback />
              {/* google HelpBlock */}
            </FormGroup>
          </form>
        </container>  
      </div>
    )
  }
};

export default Login;