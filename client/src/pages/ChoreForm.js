import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";
import moment from 'moment';
import API from "../utils/API"
import Wrapper from "../components/Wrapper";

//adding a form to submit chores,roomiename,details and date

class ChoreForm extends React.Component {

  state = {
    // Add Initial State
    start: "",
    end: "",
    details: "",
    date: "",
    choreFor: "",
    title: ""
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.date && this.state.date && this.state.details && this.state.title) {
      API.saveChores({
        start: this.state.date,
        end: this.state.date,
        title: this.state.title,
        choreFor: this.state.choreFor,
        details: this.state.details
      })
        .then(
          this.setState({
            start: "",
            end: "",
            date: "",
            details: "",
            choreFor: ""
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
        <Container style={{height: 700}}>
          <Row>
            <Col size="md-12">
              <h1 id= "choreForm" >Add Chores</h1>


              <form id="choreCont">
                <div className="form-group">
                  <label htmlFor="chores">Chore</label>
                  <input onChange={this.handleInputChange} value={this.state.title} name="title" type="text" className="form-control" id="chores" placeholder="New chore name" />
                </div>
                <div className="form-group">
                  <label htmlFor="selectroomie">Chore For: </label>
                  <input onChange={this.handleInputChange} value={this.state.choreFor} name="choreFor" type="text" className="form-control" id="selectroomie" placeholder="Enter Name of Roomie" />
                </div>
                <div className="form-group">
                  <label htmlFor="details">Chore Details</label>
                  <textarea onChange={this.handleInputChange} value={this.state.details} name="details" className="form-control" id="details" rows="3"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="date">Chore Due Date</label>
                  <input onChange={this.handleInputChange} value={this.state.date} name="date" type="date" className="form-control" id="date" />
                </div>

                <button onClick={this.handleFormSubmit} type="submit" className="btn mb-2" style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}>Confirm chore</button>
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
