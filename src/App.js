import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sessionDuration: 1500,
      breakDuration: 300,
      timeRemaining: 1500,
      timerOn: false
    };
  }

  // Using property initializer syntax to avoid need to bind, since arrow functions don't create their own this context and use value of enclosing context instead. transform-class-properties Babel plugin necessary to use this syntax (included in Create React App). Refer to https://itnext.io/property-initializers-what-why-and-how-to-use-it-5615210474a3 for more details

  // DURATION CHANGES

  decreaseBreakDuration = () => {
    // subtract 60 from this.state.breakDuration
    this.setState(prevState => {
      return {
        breakDuration: prevState.breakDuration - 60
      }
    });
  }

  increaseBreakDuration = () => {
    // add 60 to this.state.breakDuration
    this.setState(prevState => {
      return {
        breakDuration: prevState.breakDuration + 60
      }
    });
  }

  decreaseSessionDuration = () => {
    // subtract 60 from this.state.sessionDuration
    this.setState(prevState => {
      return {
        sessionDuration: prevState.sessionDuration - 60,
        timeRemaining: prevState.timeRemaining - 60
      }
    });
  }

  increaseSessionDuration = () => {
    // add 60 to this.state.sessionDuration
    this.setState(prevState => {
      return {
        sessionDuration: prevState.sessionDuration + 60,
        timeRemaining: prevState.timeRemaining + 60
      }
    });
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
      timerOn: false,
      timeRemaining: this.state.sessionDuration
    });

  }


  render() {
    return (
      <Timer

        breakDuration={this.state.breakDuration}
        sessionDuration={this.state.sessionDuration}

        decreaseBreakDuration={this.decreaseBreakDuration}
        increaseBreakDuration={this.increaseBreakDuration}
        decreaseSessionDuration={this.decreaseSessionDuration}
        increaseSessionDuration={this.increaseSessionDuration}

        timeRemaining={this.state.timeRemaining}
        timerOn={this.state.timerOn}

        startTimer={this.startTimer}
        pauseTimer={this.pauseTimer}
        resetTimer={this.resetTimer}
      />
    );
  };
}

export default App;
