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
          <h1>Add Chores</h1>


          <form>
            <div className="form-group">
              <label htmlFor="chores">Chore</label>
              <input type="text" className="form-control" id="chores" placeholder="New chore name" />
            </div>
            <div className="form-group">
              <label htmlFor="selectroomie">Chore For: </label>
              <select className="form-control" id="selectroomie">
                <option>select</option>
                <option>Alex</option>
                <option>Joanne</option>
                <option>Riya</option>
                <option>Shaheen</option>
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

            <button type="submit" className="btn btn-success mb-2">Confirm chore</button>
          </form>
        </Col>
      </Row>
    </Container>
    <Footer />

  </div>




);

export default ChoreForm;
