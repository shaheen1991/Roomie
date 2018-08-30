import React from 'react';
import "./Modal.css";
import API from '../../utils/API.js';

export default class Big extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.choreTitle,
      roomie: props.choreRoomie,
      details: props.choreDetails,
      choreId: props.choreId
    }
  }

  deleteChore = () => {
    API.deleteChore(this.state.choreId)
      .then(res => window.location.reload())
      .catch(err => console.log(err))
  }

  render() {

    return (
      <div className="example text-center">
       <h1>Put content below</h1>
       <h3 id="title" className="text-center">Chore: {this.state.title}</h3>
       <h3 id="roomie" className="text-center">Roomie: {this.state.roomie}</h3>
       <h3 id="details" className="text-center">Details: {this.state.details}</h3>
       <button type="button" className="btn btn-danger center-block" onClick={this.deleteChore}>Delete Chore</button>
      </div>
    );
  }
}


// export default Modal;