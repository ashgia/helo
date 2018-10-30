import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Nav extends Component {
  logout = e => {
    axios.post("/api/logout").then(() => {
      return <Redirect to="/" />;
    });
  };
  render() {
    return (
      <div>
        <img
          alt="sdfef"
          width="60px"
          src={this.props.profile_pic || "https://robohash.org/asd"}
        />
        <Link to="/dashboard">
          <button>Home</button>
        </Link>
        <Link to="/new">
          <button>New Post</button>
        </Link>
        <Link to="/">
          <button>Logout</button>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Nav);
