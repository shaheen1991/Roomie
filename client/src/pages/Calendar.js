import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BigCalendar from 'react-big-calendar';
import Toolbar from 'react-big-calendar';
import moment from 'moment';
import API from "../utils/API";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";
import Big from "../components/Modal";
import Modal from 'react-responsive-modal';


BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component {
    state = {
    events: [],
    bigModal: false
 /*  state={
    events:[
      { 
        start: new Date(moment('2018-08-29T00:00:00.000Z').format('MM-DD-YYYY')),
        end: new Date(moment('2018-08-29T00:00:00.000Z').format('MM-DD-YYYY')),
        title: "Rent Due"
      },
      {
        start: new Date(2018, 7, 5),
        end: new Date(2018, 7, 5),
        title: "Electricity Bill Due"
      },
      {
        start: new Date(2018, 7, 18),
        end: new Date(2018, 7, 22),
        title: "Joanne's Vacation"
      }
    ],
 */

  }

  componentDidMount() {
    this.loadChores();
    console.log(this.state.events);
  }

  loadChores = () => {
    API.getChores()
      .then(res =>
        this.setState({ events: res.data})
      )
      .catch(err => console.log(err));
  };

  handleOpenModal = () => {
    this.setState({ bigModal: true });
  };

  handleCloseModal = () => {
    this.setState({ bigModal: false });
  }

  render() {
    
    return (
      <div>
        <Navbar1 />

        {
          this.state.bigModal ?
            <Modal 
              open={true} 
              onClose={this.handleCloseModal}
            >
              
              <Big />
            </Modal> : false
        }

      
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">

              <BigCalendar
                defaultDate={new Date()}
                defaultView="month"
                selectable
                //instead of alert, make a modal
                onSelectEvent={this.handleOpenModal}
                events={this.state.events}
                style={{ height: "100vh" }}
              />
            </Col>
          </Row>
        </Container>
        
        <Footer id="footer"/>
      </div>

    )
  }

};

export default Calendar;