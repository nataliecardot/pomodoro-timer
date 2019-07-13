import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sessionDuration: 1500,
      breakDuration: 300,
      timerOn: false,

    };
  }

  // Using property initializer syntax to avoid need to bind, since arrow functions don't create their own this context and use value of enclosing context instead. transform-class-properties Babel plugin necessary to use this syntax (included in Create React App). Refer to https://itnext.io/property-initializers-what-why-and-how-to-use-it-5615210474a3 for more details

  // DURATION CHANGES

  decreaseBreakDuration = () => {

  }

  increaseBreakDuration = () => {

  }

  decreaseSessionDuration = () => {

  }

  increaseSessionDuration = () => {

  }

  // PLAY, PAUSE, RESTART BUTTONS

  startTimer = () => {
    this.setState({
      timerOn: true
    });

  }

  pauseTimer = () => {
    this.setState({
      timerOn: false
    });
  }

  resetTimer = () => {
    this.setState({
      timerOn: true
    });
  }


  render() {
    return (
      <Timer
        sessionDuration={this.state.sessionDuration}
        breakDuration={this.state.breakDuration}
        timerOn={this.state.timerOn}

        decreaseBreakDuration={this.decreaseBreakDuration}
        increaseBreakDuration={this.increaseBreakDuration}
        decreaseSessionDuration={this.decreaseSessionDuration}
        increaseSessionDuration={this.increaseSessionDuration}

        startTimer={this.startTimer}
        pauseTimer={this.pauseTimer}
        resetTimer={this.resetTimer}
      />
    );
  };
}

export default App;
