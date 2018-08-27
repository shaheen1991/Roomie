import React from 'react';
import "./Modal.css";

export default class Big extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.choreTitle,
      roomie: props.choreRoomie,
      details: props.choreDetails
    }
  }

  render() {
    return (
      <div className="example">
       <h1>This is the modal. Put content below</h1>
       <h3>{this.state.title}</h3>
       <h3>{this.state.roomie}</h3>
       <h3>{this.state.details}</h3>
      </div>
    );
  }
}


// export default Modal;