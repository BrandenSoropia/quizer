import React, { Component } from "react";
import "./App.css";
import Quiz from "./quiz";
import services from "./services";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      error: {}
    };
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
        <Quiz questions={this.state.questions} />
      </div>
    );
  }
}

export default App;
