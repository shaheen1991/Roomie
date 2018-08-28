
import React, { Component } from "react";
import "./chat.css";
import API from "../../utils/API";


import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import { List, ListItem } from "../../components/List";
import { Input,  FormBtn } from "../../components/Form";
// import { Link } from "react-router-dom";


class CommentBox extends Component {
  state = {
    smacks: [],
    authorName: "",
    authorComment: ""
  };

  componentDidMount() {
    this.loadSmacks();
  }

  loadSmacks = () => {
    console.log("function running")
    API.getSmacks()
      .then(res =>
        this.setState({ smacks: res.data, authorName: "", authorComment: "" })
      )
      .catch(err => console.log(err));
  };

  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("adding to db")
    ////if (this.state.authorName && this.state.authorComment) {
      console.log("here")
      console.log(this.state.authorName)
      API.saveSmacks({
        authorName: this.state.authorName,
        authorComment: this.state.authorComment
      })
        .then(res => this.loadSmacks())
        .catch(err => console.log(err));
    //}
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            
            <form>
              <Input
                value={this.state.authorName}
                onChange={this.handleInputChange}
                name="authorName"
                placeholder="Your name"
              />
              <Input
                value={this.state.authorComment}
                onChange={this.handleInputChange}
                name="authorComment"
                placeholder="Message"
              />
             
              <FormBtn
                // disabled={!(this.state.authorName && this.state.authorComment)}
                onClick={this.handleFormSubmit}
              >
                Post
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            
            {this.state.smacks.length ? (
              <List>
                {this.state.smacks.map(smack => (
                  <ListItem key={smack._id}>
                    
                      <strong >
                        {smack.authorName} 
                        <hr/>
                         {smack.authorComment}
                      </strong>
                   
                   
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentBox;



