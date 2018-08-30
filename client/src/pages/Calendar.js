import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import API from "../utils/API";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";
import Big from "../components/Modal";
import Modal from 'react-responsive-modal';
import Wrapper from "../components/Wrapper";


BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component {
  state = {
    events: [],
    bigModal: false,
    choreTitle: "",
    choreDetails: "",
    choreRoomie: "",
    choreId: ""
  }


  componentDidMount() {
    this.loadChores();
  }

  loadChores = () => {
    API.getChores()
      .then(res =>
        // console.log(res.data)
        this.setState({ events: res.data, bigModal: false })
      )
      .catch(err => console.log(err));
  };

  handleOpenModal = (event) => {
    let choreTitle = event.title;
    let choreRoomie = event.choreFor;
    let choreDetails = event.details;
    let choreId = event._id;
    
    this.setState(
      {
        choreTitle: choreTitle,
        choreRoomie: choreRoomie,
        choreDetails: choreDetails,
        choreId: choreId
      },
      this.setState({ bigModal: true })
    )
  }

  handleCloseModal = () => {
    this.setState({ bigModal: false });
  }

  render() {

    return (
      <div> 

        <Wrapper>
        <Navbar1 />

        {
          this.state.bigModal ?
            <Modal
              open={true}
              onClose={this.handleCloseModal}
            >

              <Big
                choreTitle={this.state.choreTitle}
                choreRoomie={this.state.choreRoomie}
                choreDetails={this.state.choreDetails}
                choreId={this.state.choreId}
              />
            </Modal> : false
        }

        <Container style={{ paddingTop: 80, paddingBottom: 20}}>
        {/* <h1 className="calendarHead">Calendar</h1> */}
          <Row className= "customCal">
            <Col size="md-12">

              <BigCalendar
                
                defaultDate={new Date()}
                defaultView="month"
                selectable
                views={['month', 'day', 'agenda']}
                onSelectEvent={this.handleOpenModal}
                events={this.state.events}
                style={{ height: "70vh"}}
              />
            </Col>
          </Row>
        </Container>

        <Footer id="footer" />
        </Wrapper>
      </div>

    )
  }

};

export default Calendar;