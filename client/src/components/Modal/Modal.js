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
          <h1 id="taskDetails">Task Details</h1>      
          <div id="taskCont">
          <h3 className="modalTitle">CHORE: </h3>
          <h5 className="text-center" id="choreTitle">{this.state.title}</h5>
          <hr/>
          <h3 className="modalTitle">ROOMIE: </h3>
          <h5 className="text-center" id="choreRoomie">{this.state.roomie}</h5>
          <hr/>
          <h3 className="modalTitle">DETAILS: </h3>
          <h5 className="text-center" id="choreDetails">{this.state.details}</h5>
          <button type="button" className="btn btn-danger center-block" onClick={this.deleteChore}>Delete Chore</button>
        </div>
      </div>
    );
  }
}


// export default Modal;