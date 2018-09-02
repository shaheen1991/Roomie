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
import { Carousel } from 'react-bootstrap';



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
      <div > 

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

        <Container className="calContainer" style={{ paddingTop: 80, paddingBottom: 20}}>
        {/* <h1 className="calendarHead">Calendar</h1> */}
          <Row >
            <Col size="md-12"className= "customCal">
              <BigCalendar
                defaultDate={new Date()}
                defaultView="month"
                selectable
                views={['month', 'agenda']}
                onSelectEvent={this.handleOpenModal}
                events={this.state.events}
                style={{ height: "80vh"}}
              />
            </Col>
          </Row>

        </Container >  
            <div >
              <h2 className="options"> Style Your Apartment</h2>
            </div>        
            <Carousel className="calCarousel">
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel1.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel2.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel3.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel4.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel5.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel6.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel7.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel8.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel9.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel10.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel11.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel12.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel13.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel14.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel15.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel16.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/img/carousel17.jpg" />
              </Carousel.Item>
            </Carousel>;
        <Footer />
        </Wrapper>        
  
      </div>

    )
  }

};

export default Calendar;