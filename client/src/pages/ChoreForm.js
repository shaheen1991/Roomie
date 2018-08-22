import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";
import moment from 'moment';
import API from "../utils/API"

//adding a form to submit chores,roomiename,details and date

class ChoreForm extends React.Component {

  state = {
    // Add Initial State
    choreName: "",
    roomieName: "",
    details: "",
    date: null
  }
/* 
  componentDidMount() {
    this.loadChores();
  } */

 /*  loadChores = () => {
    API.getChores()
    .then(this.setState({ books: res.choreName, roomieName: "", details: "", date: null })
    .catch(err => console.log(err));
  } */

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.choreName && this.state.roomieName && this.state.details && this.state.date) {
      API.saveChores({
        choreName: this.state.choreName,
        roomieName: this.state.roomieName,
        details: this.state.details,
        date: this.state.date
      });
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
        <Navbar1 />
        <Container style={{ marginTop: 30 }}>
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
        </Container>
        <Footer />

      </div>
    );
  }
}

export default ChoreForm;
