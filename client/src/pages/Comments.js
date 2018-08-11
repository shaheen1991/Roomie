import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

//adding a form to submit chores,roomiename,details and date

const Comments = () => (
  <div>

     Hi I'm Kenny! Be My Roommie!


    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Comments Page</h1>


          <form>
            <div class="form-group">
              <label for="chores">Chores</label>
              <input type="text" class="form-control" id="chores" placeholder="chores"/>
            </div>
              <div class="form-group">
                <label for="selectroomie">Select Roomie</label>
                <select class="form-control" id="selectroomie">
                  <option>select</option>
                  <option>Alex</option>
                  <option>Joanne</option>
                  <option>Riya</option>
                  <option>Shaheen</option>
                </select>
              </div>
              <div class="form-group">
                <label for="details">Details</label>
                <textarea class="form-control" id="details" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label for="date">Schedule Date</label>
                <input type="date" class="form-control" id="date" />
              </div>

              <button type="submit" class="btn btn-success mb-2">Confirm chore</button>
          </form>
        </Col>
      </Row>
    </Container>
     
  </div>




    );
    
    export default Comments;
