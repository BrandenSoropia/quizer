import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { login_key: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ login_key: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { login_key } = this.state;
    const { setUserId } = this.props;

    axios
      .post(process.env.API_URL + '/users/login', { login_key })
      .then(response => {
        if (response.data.length === 0) {
          console.log('invalid username');
        } else {
          console.log('valid username');
          setUserId(response.data[0]._id);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h1>Enter your ID:</h1>
          <p />
          <input
            type="text"
            value={this.state.login_key}
            onChange={this.handleChange}
          />
        </label>
        <p />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

LoginForm.propTypes = {
  login_key: PropTypes.string,
  handleSubmit: PropTypes.func
};

export default LoginForm;
