import React from 'react';
import LoginForm from '../LoginForm';
import '../Styles/SignUp.css';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: "",
    };
  }

  componentDidMount() {
      fetch('http://localhost:9000/register/')
      // .then(res => res.json()) // comment this out for now
      .then(res => res.text())          // convert to plain text
      .then(text => console.log(text)) 

    fetch("http://localhost:9000/register/")
      .then(res => res.text())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
   
    return (
      <div className="sign-up-container">
        <h1>Login</h1>
            <LoginForm 

            />
      </div>

      )
    /*
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>
            {this.state.items}
            {items}
            <h2>Hello world</h2>
          </h1>
        </div>
      );
    }
    */
  }
}