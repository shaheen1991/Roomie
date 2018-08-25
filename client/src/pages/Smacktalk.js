import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";
import CommentBox from "../components/Chat";

const SmackTalk = () => (
  <div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1 style={{fontFamily:"'Alegreya Sans SC', sans-serif"}}>SmackTalk</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">

           <CommentBox/>
          
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);

export default SmackTalk;