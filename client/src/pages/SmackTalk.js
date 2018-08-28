import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";
import CommentBox from "../components/Chat";
import Wrapper from "../components/Wrapper";

const SmackTalk = () => (
  <div>
  <Wrapper>
    <Navbar1 />
    <Container>
      <Row>
        <Col size="md-12">
          <h1 className="smackTalk" style={{paddingTop: 80, paddingBottom: 20}}>SmackTalk</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">

           <CommentBox/>
          
        </Col>
      </Row>
    </Container>
    <Footer />  
    </Wrapper>
  </div>

);

export default SmackTalk;