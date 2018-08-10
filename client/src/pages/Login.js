import React, {Component} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Form} from 'react-bootstrap';

class Login extends Component{

  state={
    value:""
  }
  getValidationState = ()=> {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange =(e)=> {
    this.setState({ value: e.target.value });
    console.log("STATE: ", this.state.value)
  }


  render(){
    return(
      <div>
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
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
              {/* google HelpBlock */}
              <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
          </form>
      </div>
    )
  }

  

//check out react bootstrap login form**

};
{/* <Form horizontal>
<FormGroup controlId="formHorizontalEmail">
  <Col componentClass={ControlLabel} sm={2}>
    Email
  </Col>
  <Col sm={10}>
    <FormControl type="email" placeholder="Email" />
  </Col>
</FormGroup>

<FormGroup controlId="formHorizontalPassword">
  <Col componentClass={ControlLabel} sm={2}>
    Password
  </Col>
  <Col sm={10}>
    <FormControl type="password" placeholder="Password" />
  </Col>
</FormGroup>

<FormGroup>
  <Col smOffset={2} sm={10}>
    <Checkbox>Remember me</Checkbox>
  </Col>
</FormGroup>

<FormGroup>
  <Col smOffset={2} sm={10}>
    <Button type="submit">Sign in</Button>
  </Col>
</FormGroup>
</Form>; */}

<container class="login">

</container>


export default Login;