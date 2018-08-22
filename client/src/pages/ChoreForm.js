import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";
//adding a form to submit chores,roomiename,details and date

const ChoreForm = () => (
  <div>
    <Navbar1 />
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1 style={{fontFamily: "'Alegreya Sans SC', sans-serif"}}>Add Chores</h1>


          <form id = "choreCont"> 
            <div className="form-group">
              <label htmlFor="chores">Chore</label>
              <input type="text" className="form-control" id="chores" placeholder="New chore name" />
            </div>
            <div className="form-group">
              <label htmlFor="selectroomie">Chore For: </label>
              <select className="form-control" id="selectroomie">
                <option style={{ fontWeight: "bold" }}>select</option>
                <option style={{ fontWeight: "bold" }}>Alex</option>
                <option style={{ fontWeight: "bold" }}>Joanne</option>
                <option style={{ fontWeight: "bold" }}>Riya</option>
                <option style={{ fontWeight: "bold" }}>Shaheen</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="details">Chore Details</label>
              <textarea className="form-control" id="details" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="date">Chore Due Date</label>
              <input type="date" className="form-control" id="date" />
            </div>

            <button type="submit" className="btn mb-2" style={{fontFamily: "'Alegreya Sans SC', sans-serif"}}>Confirm chore</button>
          </form>
        </Col>
      </Row>
    </Container>
    <Footer />

  </div>




);

export default ChoreForm;
