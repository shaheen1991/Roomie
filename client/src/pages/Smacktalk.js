import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";
import CommentBox from "../components/Chat";
import Wrapper from "../components/Wrapper";
// import { withUser } from '../services/withUser';
// import Landing from '../components/Landing/landing';




const SmackTalk = () => (
  <CommentBox/>
  // <div>
  //   {/* <CommentBox/> */}
  // <Wrapper>
  // {user ?
  //   <Container>
  //     <Row>
  //       <Col size="md-12">
  //         <h1 className="smackTalk" style={{paddingTop: 80, paddingBottom: 20}}>SmackTalk</h1>
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col size="md-12">

  //          <CommentBox/>
          
  //       </Col>
  //     </Row>
  //   </Container>
  //   : <Landing/>}
  //   <Footer />  
    
  //   </Wrapper>
  // </div>

);

export default SmackTalk;