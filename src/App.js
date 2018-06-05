import React, { Component } from 'react';
import './App.css';
import Quiz from './quiz';
import services from './services';
import LoginForm from './login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      questions: [],
      error: {},
      name: '',
      desc: '',
      img: ''
    };

    this.setUserId = this.setUserId.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  isLoggedIn() {
    return this.state.userId !== '';
  }

  setUserId(userId) {
    this.setState({ userId });
  }

  componentDidMount() {
    const params = {
      current_date: new Date()
    };

    services
      .getCurrentActiveQuiz(params)
      .then(quiz => {
        this.setState(prevState => {
          return { ...quiz };
        });
      })
      .catch(error => {
        // TODO: Display error after standardized errors on backend
        alert(error);
      });
  }

  render() {
    return (
      <div className="App">
        {this.isLoggedIn() ? (
          <Quiz name={this.state.name} desc={this.state.desc} img={this.state.img} questions={this.state.questions} />
        ) : (
          <LoginForm setUserId={this.setUserId} />
        )}
      </div>
    );
  }
}

export default App;
