import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  // Class property syntax allows you to remove constructor when just being used to initialize state
  state = {
    sessionDuration: 5, // TODO: change back to 1500 when testing done
    breakDuration: 3, // TODO: change back to 300 when testing done
    sessionTimeRemaining: 5, // TODO: change back to 1500 when testing done
    breakTimeRemaining: 3, // TODO: change back to 300 when testing done
    isSession: true,
    timerOn: false,
    sessionNumber: 0
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
        sessionTimeRemaining: this.state.sessionTimeRemaining - 60
      });
    }
  }

  increaseSessionDuration = () => {
    this.setState({
      sessionDuration: this.state.sessionDuration + 60,
      sessionTimeRemaining: this.state.sessionTimeRemaining + 60
    });
  }

  manageBreak = () => {
    this.time = setInterval(() => {
      this.setState({
        breakTimeRemaining: this.state.breakTimeRemaining - 1
      });
      if (this.state.breakTimeRemaining === 0) {
        this.handleBreakComplete();
      }
    }, 1000);
  }

  manageSession = () => {
    // Every 1,000 ms (1 second), subtract 1 (a single second) from displayed sessionTimeRemaining. Assigned to this.time (scoped to entire class) in order to pass it to clearInterval() when pause button is clicked
    this.time = setInterval(() => {
      this.setState({
        sessionTimeRemaining: this.state.sessionTimeRemaining - 1
      });
      if (this.state.sessionTimeRemaining === 0) {
        this.handleSessionComplete();
      }
    }, 1000);
  }

  handleSessionComplete = () => {
    clearInterval(this.time);
    this.setState({
      sessionNumber: this.state.sessionNumber + 1
    })

    if (this.state.sessionNumber === 4) {
      this.handlePomodoroCycleDone();
    } else {
      this.setState({
        timerOn: false,
        sessionTimeRemaining: this.state.sessionDuration,
        breakTimeRemaining: this.state.breakDuration,
        isSession: !this.state.isSession
      });
    }
  }

  handlePomodoroCycleDone = () => {
    // TODO: Display message in modal
    console.log('Great work! You finished a pomodoro cycle (four sessions). Time to relax.')
    // Changed back to default values
    this.setState({
      isSession: true,
      timerOn: false,
      sessionDuration: 5, // TODO: change back to 1500
      breakDuration: 3, // TODO: change back to 300 when testing done
      sessionTimeRemaining: 5, // TODO: change back to 1500
    });
  }

  handleBreakComplete = () => {
    clearInterval(this.time);
    this.setState({
      timerOn: false,
      sessionTimeRemaining: this.state.sessionDuration,
      breakTimeRemaining: this.state.breakDuration,
      isSession: !this.state.isSession
    });
  }

  // PLAY, PAUSE, RESTART BUTTONS

  startTimer = () => {
    this.setState({
      timerOn: true,
    });

    if (this.state.isSession) {
      this.manageSession();
    } else {
      this.manageBreak();
    }
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
  // TODO: Display 4 unchecked circle icons again
    clearInterval(this.time);
    this.setState({
      timerOn: false,
      sessionDuration: 5, // TODO: change back to 1500
      breakDuration: 3, // TODO: change back to 300 when testing done
      sessionTimeRemaining: 5, // TODO: change back to 1500
      breakTimeRemaining: 3 // TODO: change back to 300 when testing done
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

        sessionTimeRemaining={this.state.sessionTimeRemaining}
        breakTimeRemaining={this.state.breakTimeRemaining}
        timerOn={this.state.timerOn}
        sessionNumber={this.state.sessionNumber}

        isSession={this.state.isSession}

        startTimer={this.startTimer}
        pauseTimer={this.pauseTimer}
        resetTimer={this.resetTimer}
      />

    );
  };
}

export default App;
