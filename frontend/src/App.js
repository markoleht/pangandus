import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/test")
          .then(res => res.text())
          .then(res => console.log(res));
  }

  componentWillMount() {
      this.callAPI();
  }
  render() {
    return (
      <div className="app">
        <header className="App-header">
          <h1 className="App-title">Welcome to react</h1>
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    )
  }
}


export default App;
