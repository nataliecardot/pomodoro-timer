import React, { Component } from 'react';
import Timer from './Timer';
import chime from './chime.mp3';

class Alarm {
  constructor(source) {
    this.sound = new Audio(source);
  }

  playSound() {
    // Returns promise; see https://developers.google.com/web/updates/2016/03/play-returns-promise
    return this.sound.play();
  }
}

const alarm = new Alarm(chime);

class App extends Component {
constructor() {
  super();

  this.state = {
    sessionDuration: 5, // TODO: change back to 1500 when testing done
    breakDuration: 3, // TODO: change back to 300 when testing done
    sessionTimeRemaining: 5, // TODO: change back to 1500 when testing done
    breakTimeRemaining: 3, // TODO: change back to 300 when testing done
    isSession: true,
    timerOn: false,
    sessionNumber: 0,
    open: true // Modal informing user pomodoro cycle complete
  }
  this.alarm = alarm;
}

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

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

  playAlarm() {
    const playPromise = this.alarm.playSound();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log('Alarm audio playback started.');
      }).catch((err) => {
        console.log(`Alarm audio playback error: ${err.message}`);
      });
    }
  }

  handleSessionComplete = () => {
    clearInterval(this.time);
    this.playAlarm();
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
    this.onOpenModal();
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
    this.playAlarm();
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
    clearInterval(this.time);
    this.setState({
      timerOn: false,
      sessionDuration: 5, // TODO: change back to 1500
      breakDuration: 3, // TODO: change back to 300 when testing done
      sessionTimeRemaining: 5, // TODO: change back to 1500
      breakTimeRemaining: 3, // TODO: change back to 300 when testing done
      sessionNumber: 0
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

        open={this.state.open}
        onOpenModal={this.onOpenModal}
        onCloseModal={this.onCloseModal}
      />

    );
  };
}

export default App;
