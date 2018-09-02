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
    <Container style={{height: 1000}}>
      <Row id="smackTalkRow" >
        <Col size="md-2">
          <h1 className="smackTalk">SmackTalk</h1>
        </Col>        
        <Col size="md-10">
           <CommentBox/>
        </Col>
      </Row>
    </Container>
    
    
    
    <Footer />  
    </Wrapper>
  </div>

);

export default SmackTalk;