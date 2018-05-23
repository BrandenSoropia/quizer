import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {login_key: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({login_key: event.target.value});
  }

  handleSubmit(event) {

    const { login_key } = this.state;
    axios.post('http://localhost:3001/users/login', { login_key })
          .then(function (response) {
              if (response.data.length === 0){
              console.log("invalid username")}
              else{
              console.log("valid username");
              }
            })
            .catch(function (error) {
              console.log(error);
            });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h1>Enter your ID:</h1><p/>
          <input type="text" value={this.state.login_key} onChange={this.handleChange} />
        </label><p/>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

LoginForm.propTypes = {
  login_key: PropTypes.string,
  handleSubmit: PropTypes.func
}

export default LoginForm;