import React from 'react';
import { Button } from './Button';
import './Registration.css';
 

class RegistrationForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
    render() {
      return (
        <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <h2>Register to become our customer!</h2>
          </div>
          <hr />
          <div>
            <label>
              Name:
              <input type="text" className="input" value={this.state.value} onChange={this.handleChange} />
            </label>
          </div>
          <div>          
            <label>
              Email:
              <input type="text" className="input" value={this.state.value} onChange={this.handleChange} />
            </label>
          </div>
          <div>
          <label>
            Password:
            <input type="text" className="input" value={this.state.value} onChange={this.handleChange} />
          </label>
          </div>
          <div>
            <label>
              Password again:
              <input type="text" className="input" value={this.state.value} onChange={this.handleChange} />
            </label>
          </div>
          <hr />
          
          <Button buttonStyle="btn">Sign up!</Button>
        </form>
        </div>

      );
    }
  }

  export  default RegistrationForm;