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
    this.setState({
      breakDuration: this.state.breakDuration - 60
    });
  }

  increaseBreakDuration = () => {
    // add 60 to this.state.breakDuration
    this.setState({
      breakDuration: this.state.breakDuration + 60
    });
  }

  decreaseSessionDuration = () => {
    // subtract 60 from this.state.sessionDuration
    this.setState({
      sessionDuration: this.state.sessionDuration - 60,
      timeRemaining: this.state.timeRemaining - 60
    });
  }

  increaseSessionDuration = () => {
    // add 60 to this.state.sessionDuration
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
