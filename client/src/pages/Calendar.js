import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import API from "../utils/API";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Footer from "../components/Footer";
import Big from "../components/Modal";
import Modal from 'react-responsive-modal';
import Wrapper from "../components/Wrapper";
import LoginButton from '../components/LoginButton';
import { withUser } from '../services/withUser';
import Landing from '../components/Landing/landing';



BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component {
  state={
    events:[
      {
         //*******There is something to note the months are displayed 1 back which means if you want 
        //to display for month 8 then code must be for month 7 */
        //change to automatically make rent due the first day of the moment by utilizing moment (need to research more!) use regular javascript and maybe math but best to do this on the server side
        //start: new Date(moment().add(1,'days')),
        //end: new Date(moment().add(1, "days")), 
        start: new Date(2018, 7, 1),
        end: new Date(2018, 7, 1),
        title:"Rent Due"
      },
      {
        //start: new Date(moment().add(11,'days')),
        //end: new Date(moment().add(11, "days")),
        start: new Date(2018, 7, 5),
        end: new Date(2018, 7, 5),
        title:"Electricity Bill Due"
      },
      {
       
        //start: new Date(moment().add(7,'days')),
       // end: new Date(moment().add(10, "days")),
        start: new Date(2018, 7, 18),
        end: new Date(2018, 7, 22),
        title:"Joanne's Vacation"
      } 
    ],

    bigModal: false
  }
  //events = state
  // retrieve from database and iterate through changing state dynamically.
  // handleGetEvents = ()=>{
  //   this.setState
  // }

/*   rentDueDate = () => {
    
  } */

  handleOpenModal = () => {
    this.setState({bigModal: true});
    // somehow render the modal
  };
  
  handleCloseModal = () => {
    this.setState({bigModal: false});
  }
  
  render(){
    const { user } = this.props;
    const username = user ? user.username : null;
    const handleLogIn = () => {
    this.props.history.push('/login');
    };
    return (
            <div>
              {user ?
              <Wrapper>
      
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
              <h1 className="calendarHead">Calendar</h1>
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
              : <Landing/>}
            </div>
      
          )
        }
      
      };

export default withUser(Calendar);

// class Calendar extends Component {
//   state = {
//     events: [],
//     bigModal: false,
//     choreTitle: "",
//     choreDetails: "",
//     choreRoomie: "",
//     choreId: ""
//   }


//   componentDidMount() {
//     this.loadChores();
//   }

//   loadChores = () => {
//     API.getChores()
//       .then(res =>
//         // console.log(res.data)
//         this.setState({ events: res.data, bigModal: false })
//       )
//       .catch(err => console.log(err));
//   };

//   handleOpenModal = (event) => {
//     let choreTitle = event.title;
//     let choreRoomie = event.choreFor;
//     let choreDetails = event.details;
//     let choreId = event._id;
    
//     this.setState(
//       {
//         choreTitle: choreTitle,
//         choreRoomie: choreRoomie,
//         choreDetails: choreDetails,
//         choreId: choreId
//       },
//       this.setState({ bigModal: true })
//     )
//   }

//   handleCloseModal = () => {
//     this.setState({ bigModal: false });
//   }

//   render() {
//     const { user } = this.props;
//     const username = user ? user.username : null;
//     const handleLogIn = () => {
//     this.props.history.push('/login');
//     };

//     return (
//       <div>
//         {user ?
//         <Wrapper>


//         {
//           this.state.bigModal ?
//             <Modal
//               open={true}
//               onClose={this.handleCloseModal}
//             >

//               <Big
//                 choreTitle={this.state.choreTitle}
//                 choreRoomie={this.state.choreRoomie}
//                 choreDetails={this.state.choreDetails}
//                 choreId={this.state.choreId}
//               />
//             </Modal> : false
//         }

//         <Container style={{ paddingTop: 80, paddingBottom: 20}}>
//         <h1 className="calendarHead">Calendar</h1>
//           <Row className= "customCal">
//             <Col size="md-12">

//               <BigCalendar
                
//                 defaultDate={new Date()}
//                 defaultView="month"
//                 selectable
//                 views={['month', 'day', 'agenda']}
//                 onSelectEvent={this.handleOpenModal}
//                 events={this.state.events}
//                 style={{ height: "70vh"}}
//               />
//             </Col>
//           </Row>
//         </Container>

//         <Footer id="footer" />
//         </Wrapper>
//         : <LoginButton onClick={handleLogIn} />}
//       </div>

//     )
//   }

// };

// export default withUser(Calendar);