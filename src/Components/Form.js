import React, { Component } from "react";
import axios from "axios";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handleTitle(newT) {
    this.setState({ title: newT });
  }

  handleContent(newC) {
    this.setState({ content: newC });
  }
  handleButton() {
    axios
      .post(`/api/new?title=${this.state.title}&content=${this.state.content}`)
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return (
      <div>
        <input onChange={e => this.handleTitle(e.target.value)} />
        <input onChange={e => this.handleContent(e.target.value)} />
        <button onClick={() => this.handleButton()}>submit</button>
      </div>
    );
  }
}

export default Form;
