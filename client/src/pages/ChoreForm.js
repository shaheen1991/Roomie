import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";
import moment from 'moment';
import API from "../utils/API"
import Wrapper from "../components/Wrapper";


class ChoreForm extends React.Component {

  state = {
    // Add Initial State
    start: "",
    end: "",
    details: "",
    date: "",
    chore: "",
    roomies: ["Alex", "Joanne", "Riya", "Shaheen"]
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.date);
    let roomieNumber = Math.floor(Math.random() * this.state.roomies.length);
    let assignedRoomie = this.state.roomies[roomieNumber];

    console.log(roomieNumber);
    console.log(assignedRoomie);
    alert("Chore was successfully added!")

    if (this.state.date && this.state.date && this.state.details && this.state.chore) {
      API.saveChores({
        start: moment(this.state.date).add(1, 'hour').toDate(),
        end: moment(this.state.date).add(1, 'hour').toDate(),
        title: this.state.chore,
        choreFor: assignedRoomie,
        details: this.state.details
      })
        .then(

          this.setState({
            start: "",
            end: "",
            date: "",
            chore: "",
            details: "",
            roomies: ["Alex", "Joanne", "Riya", "Shaheen"]
          })
        )
        .catch(err => console.log(err));
    }
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <div>
        <Wrapper>
        <Navbar1 />
        <Container style={{height: 600}}>
          <Row id="choreRow">     
          <Col size="md-6">                   
            <h1 id= "choreForm" >Add Chores</h1>
            </Col>
            <Col size="md-6">
              <form id="choreCont">
                <div className="form-group choreFormGroup">
                  <label className="labelChore" htmlFor="chores">Chore</label>
                  <input onChange={this.handleInputChange} value={this.state.chore} name="chore" type="text" className="form-control choreFormControl" id="chores" placeholder="New chore name" />
                </div>
                <div className="form-group choreFormGroup">
                  <label className="labelChore" htmlFor="details">Chore Details</label>
                  <textarea onChange={this.handleInputChange} value={this.state.details} name="details" className="form-control choreFormControl" id="details" rows="3"></textarea>
                </div>
                <div className="form-group choreFormGroup">
                  <label className="labelChore" htmlFor="date">Chore Date</label>
                  <input onChange={this.handleInputChange} value={this.state.date} name="date" type="date" className="form-control choreFormControl" id="date" />
                </div>
                <button onClick={this.handleFormSubmit} type="submit" className="btn mb-2" style={{ fontFamily: "'Alegreya Sans', sans-serif", color:"rgba(47,49,49,0.8) ", marginTop: 40, backgroundColor: "#F8F1E5"}}>Confirm chore</button>
              </form>
            </Col>
          </Row>
        </Container>
        <Footer />
        </Wrapper>
      </div>
    );
  }
}

export default ChoreForm;
