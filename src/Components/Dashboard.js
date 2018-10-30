import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      firstname: "",
      lastname: "",
      password: "",
      edit: false,
      sessionstuffz: ""
    };
  }

  // handleMessage(e) {
  //   this.setState({
  //     message: e.target.value
  //   });
  // }

  // sendMessage() {
  //   let { message } = this.state;
  //   axios.post("/dash/message/:id", { message }).then(response => {
  //     console.log(response);
  //   });
  // }

  // toggleEdit() {
  //   this.setState({
  //     edit: !this.state.edit
  //   });
  // }

  sessionstuffz() {
    axios.get("/session/stuffz").then(response => {
      this.setState({
        sessionstuffz: response
      });
    });
    console.log(this.state.sessionstuffz);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.sessionstuffz()}>Session Stuffz</button>
        {this.state.sessionstuffz}
      </div>
    );
  }
}

export default Dashboard;
