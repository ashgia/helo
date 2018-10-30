import React, { Component } from "react";

import "./App.css";

import Nav from "./Components/Nav";
import routes from "./routes";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Nav />
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
