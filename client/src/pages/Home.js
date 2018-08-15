import React, {Component} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";


BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Home extends Component{
  state={
    events:[
      {
        start:new Date(),
        end: new Date(moment().add(1,"days")),
        title: "Title"
      }
    ]
  }

  render(){
    return(
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <BigCalendar
              className="customCal"
              // className = if classname doesnt work go to node modules, react-big-calendar lib css react-big-calendar.css and change css there but try to use our own classes****
              defaultDate={new Date()}
              defaultView="month"
              events={this.state.events}
              style={{height:"100vh"}}
              />
            </Col>
          </Row>
        </Container>
      </div>

    )
  }

};

export default Home;