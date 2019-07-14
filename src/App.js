import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sessionDuration: 1500,
      breakDuration: 300,
      timeRemaining: 1500,
      timerOn: false,
      sessionNumber: 0
    };
  }

  // Using property initializer syntax to avoid need to bind, since arrow functions don't create their own this context and use value of enclosing context instead. transform-class-properties Babel plugin necessary to use this syntax (included in Create React App). Refer to https://itnext.io/property-initializers-what-why-and-how-to-use-it-5615210474a3 for more details

  // DURATION CHANGES

  decreaseBreakDuration = () => {
    // Conditional statement prevents decrease when break is at 1 minute
    if (this.state.breakDuration === 60) {
      return undefined;
    } else {
      this.setState({
        breakDuration: this.state.breakDuration - 60
      });
    }
  }

  increaseBreakDuration = () => {
    this.setState({
      breakDuration: this.state.breakDuration + 60
    });
  }

  decreaseSessionDuration = () => {
    // Conditional statement prevents decrease when session is at 5 minutes
    if (this.state.sessionDuration === 300) {
      return undefined;
    } else {
      this.setState({
        sessionDuration: this.state.sessionDuration - 60,
        timeRemaining: this.state.timeRemaining - 60
      });
    }
  }

  increaseSessionDuration = () => {
    this.setState({
      sessionDuration: this.state.sessionDuration + 60,
      timeRemaining: this.state.timeRemaining + 60
    });
  }

  // PLAY, PAUSE, RESTART BUTTONS

  startTimer = () => {
    this.setState({
      timerOn: true
    });

    // Every 1,000 ms (1 second), subtract 1 (a single second) from displayed timeRemaining. Assigned to this.time (scoped to entire class) in order to pass it to clearInterval() when pause button is clicked
    this.time = setInterval(() => this.setState({
      timeRemaining: this.state.timeRemaining - 1
    }), 1000);
  }

  pauseTimer = () => {
    // Stops setInterval's calling its (setState) callback every 1000 ms
    clearInterval(this.time);

    this.setState({
      timerOn: false
    });
  }

  resetTimer = () => {
  // Stops setInterval's calling its (setState) callback every 1000 ms
    clearInterval(this.time);
    this.setState({
      timerOn: false,
      sessionDuration: 1500,
      breakDuration: 300,
      timeRemaining: 1500
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
