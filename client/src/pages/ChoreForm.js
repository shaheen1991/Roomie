import axios from 'axios';
// import React, {Component} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BigCalendar from 'react-big-calendar';
import Toolbar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { withUser } from '../services/withUser';
import React, { Component, Fragment } from 'react';
import { List, ListItem } from 'material-ui/List';
import LoginButton from '../components/LoginButton';
import API from "../utils/API"
import Footer from "../components/Footer";

// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))



// class Home extends Component{
  class ChoreForm extends React.Component {

    state = {
      // Add Initial State
      choreName: "",
      roomieName: "",
      details: "",
      date: null
    }
    handleFormSubmit = event => {
      event.preventDefault();
  
      if (this.state.choreName && this.state.roomieName && this.state.details && this.state.date) {
        API.saveChores({
          choreName: this.state.choreName,
          roomieName: this.state.roomieName,
          details: this.state.details,
          date: this.state.date
        })
        .then(res => res.json)
        .catch(err => console.log(err));
      }
    };
  
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  

  render(){
const { user } = this.props;
const username = user ? user.username : null;
const handleLogIn = () => {
this.props.history.push('/login');
};
return (
  <div>
    <Container style={{ marginTop: 30 }}>
    {user ?
      <Row>
        <Col size="md-12">
          <h1 style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}>Add Chores</h1>


          <form id="choreCont">
            <div className="form-group">
              <label htmlFor="chores">Chore</label>
              <input onChange={this.handleInputChange} name="choreName" type="text" className="form-control" id="chores" placeholder="New chore name" />
            </div>
            <div className="form-group">
              <label htmlFor="selectroomie">Chore For: </label>
              <input onChange={this.handleInputChange} name="roomieName" type="text" className="form-control" id="selectroomie" placeholder="Enter Name of Roomie" />
            </div>
            <div className="form-group">
              <label htmlFor="details">Chore Details</label>
              <textarea onChange={this.handleInputChange} name="details" className="form-control" id="details" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="date">Chore Due Date</label>
              <input onChange={this.handleInputChange} name="date" type="date" className="form-control" id="date" />
            </div>

            <button onClick={this.handleFormSubmit} type="submit" className="btn mb-2" style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}>Confirm chore</button>
          </form>
        </Col>
      </Row>
      : <LoginButton onClick={handleLogIn} />}
    </Container>
    <Footer />

  </div>
);
}
}







//     return(
//       <div>
//         <Container style={{ marginTop: 30 }}>
//           <Row>
//             <Col size="md-12">
            
//             {user ?
//               <BigCalendar
//               className="customCal"
//               // className = if classname doesnt work go to node modules, react-big-calendar lib css react-big-calendar.css and change css there but try to use our own classes****
//               defaultDate={new Date()}
//               defaultView="month"
//               selectable  
//               //instead of alert, make a modal
//               onSelectEvent={event => alert(event.title)}
//               events={this.state.events}
//               style={{height:"100vh"}}
//               />
//               : <LoginButton onClick={handleLogIn} />}
//             </Col>
//           </Row>
//         </Container>
//       </div>

//     )
//   }

// };

export default withUser(ChoreForm);
