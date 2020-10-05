import React from 'react';
import { Button } from './Button';
import './Styles/Registration.css';
 

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
            <h2>Register to become our valued customer!</h2>
          </div>
          <hr />
          <div>
              <input type="text" className="input"  placeholder="Name:" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div>          
              <input type="text" className="input"  placeholder="Email:" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div>
            <input type="text" className="input" placeholder="Password:" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div>
              <input type="text" className="input" placeholder="Password again:" value={this.state.value} onChange={this.handleChange} />
          </div>
          <hr />
          
          <Button buttonStyle="btn--primary">Sign up!</Button>
        </form>
        </div>

      );
    }
  }

  export  default RegistrationForm;