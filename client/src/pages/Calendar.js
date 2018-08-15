import React, {Component} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BigCalendar from 'react-big-calendar';
import Toolbar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component{
  state={
    events:[
      {
        //change to automatically make rent due the first day of the moment by utilizing moment (need to research more!) use regular javascript and maybe math but best to do this on the server side
        start: new Date(moment().add(1,'days')),
        end: new Date(moment().add(1, "days")), 
        title:"Rent Due"
      },
      {
        start: new Date(moment().add(11,'days')),
        end: new Date(moment().add(11, "days")),
        title:"Electricity Bill Due"
      },
      {
        start: new Date(moment().add(7,'days')),
        end: new Date(moment().add(7, "days")),
        title:"Internet Bill Due"
      },
      {
        start: new Date(moment().add(15,'days')),
        end: new Date(moment().add(15, "days")),
        title:"Water Bill Due"
      },
      {
        start: new Date(moment().add(7,'days')),
        end: new Date(moment().add(10, "days")),
        title:"Joanne's Vacation"
      } 
    ]
  }
  //events = state
  // retrieve from database and iterate through changing state dynamically.
  // handleGetEvents = ()=>{
  //   this.setState
  // }

/*   rentDueDate = () => {
    
  } */

  render(){
    return(
      <div>
        <Navbar1 />
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <BigCalendar
              className="customCal"
              // className = if classname doesnt work go to node modules, react-big-calendar lib css react-big-calendar.css and change css there but try to use our own classes****
              defaultDate={new Date()}
              defaultView="month"
              selectable  
              //instead of alert, make a modal
              onSelectEvent={event => alert(event.title)}
              events={this.state.events}
              style={{height:"100vh"}}
              />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>

    )
  }

};

export default Calendar;