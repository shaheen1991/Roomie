import React, {Component} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";
import CommentBox from "../components/Chat";
import LoginButton from '../components/LoginButton';
import { withUser } from '../services/withUser';



class SmackTalk extends Component {
  state={
    events:[]
  }
  render(){
    const { user } = this.props;
    const username = user ? user.username : null;
    const handleLogIn = () => {
    this.props.history.push('/login');
    };
    return(
      <div>
    
          {/* <Navbar1 /> */}
           {user ?
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
           : <LoginButton onClick={handleLogIn} />}
          <Footer />
        </div>

    )
  }
};  

// const SmackTalk = () => (

//   <div>
    
//     {/* <Navbar1 /> */}
//     {user ?
//     <Container style={{ marginTop: 30 }}>
//       <Row>
//         <Col size="md-12">
//           <h1 style={{fontFamily:"'Alegreya Sans SC', sans-serif"}}>SmackTalk</h1>
//         </Col>
//       </Row>
//       <Row>
//         <Col size="md-12">

//            <CommentBox/>
          
//         </Col>
//       </Row>
//     </Container>
//     : <LoginButton onClick={handleLogIn} />}
//     <Footer />
//   </div>
// );

export default withUser(SmackTalk);