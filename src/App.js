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
      sessionDuration: 1500,
      breakDuration: 300,
      sessionTimeLeft: 1500,
      breakTimeLeft: 300,
      isSession: true,
      timerOn: false,
      sessionNumber: 0,
      open: false, // Modal informing user pomodoro cycle complete
      volumeOn: true,
    };
    this.alarm = alarm;
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  // DURATION CHANGES

  decreaseBreak = () => {
    // Conditional statement prevents decrease when break is at 1 minute
    if (this.state.breakDuration === 60) {
      return undefined;
    } else {
      this.setState({
        breakDuration: this.state.breakDuration - 60,
      });
    }
  };

  increaseBreak = () => {
    this.setState({
      breakDuration: this.state.breakDuration + 60,
    });
  };

  decreaseSession = () => {
    // Conditional statement prevents decrease when session is at 5 minutes
    if (this.state.sessionDuration === 300) {
      return undefined;
    } else {
      this.setState({
        sessionDuration: this.state.sessionDuration - 60,
        sessionTimeLeft: this.state.sessionTimeLeft - 60,
      });
    }
  };

  increaseSession = () => {
    this.setState({
      sessionDuration: this.state.sessionDuration + 60,
      sessionTimeLeft: this.state.sessionTimeLeft + 60,
    });
  };

  manageBreak = () => {
    this.time = setInterval(() => {
      this.setState({
        breakTimeLeft: this.state.breakTimeLeft - 1,
      });
      if (this.state.breakTimeLeft === 0) {
        this.handleBreakComplete();
      }
    }, 1000);
  };

  manageSession = () => {
    // Every 1,000 ms (1 second), subtract 1 (a single second) from displayed sessionTimeLeft. Assigned to this.time (scoped to entire class) in order to pass it to clearInterval() when pause button is clicked
    this.time = setInterval(() => {
      this.setState({
        sessionTimeLeft: this.state.sessionTimeLeft - 1,
      });
      if (this.state.sessionTimeLeft === 0) {
        this.handleSessionComplete();
      }
    }, 1000);
  };

  playAlarm() {
    const playPromise = this.alarm.playSound();
    if (playPromise !== undefined) {
      playPromise
        // .then(() => {
        //   console.log('Alarm audio playback started.');
        // })
        .catch((err) => {
          console.log(`Alarm audio playback error: ${err.message}`);
        });
    }
  }

  handleSessionComplete = () => {
    clearInterval(this.time);
    if (this.state.volumeOn) {
      this.playAlarm();
    }
    this.setState({
      sessionNumber: this.state.sessionNumber + 1,
    });

    if (this.state.sessionNumber === 4) {
      this.handlePomodoroCycleDone();
    } else {
      this.setState({
        timerOn: false,
        sessionTimeLeft: this.state.sessionDuration,
        breakTimeLeft: this.state.breakDuration,
        isSession: !this.state.isSession,
      });
    }
  };

  handlePomodoroCycleDone = () => {
    this.onOpenModal();
    // Changed back to default values
    this.setState({
      isSession: true,
      timerOn: false,
      sessionDuration: 1500,
      breakDuration: 300,
      sessionTimeLeft: 1500,
    });
  };

  handleBreakComplete = () => {
    clearInterval(this.time);
    if (this.state.volumeOn) {
      this.playAlarm();
    }
    this.setState({
      timerOn: false,
      sessionTimeLeft: this.state.sessionDuration,
      breakTimeLeft: this.state.breakDuration,
      isSession: !this.state.isSession,
    });
  };

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
  };

  pauseTimer = () => {
    // Stops setInterval's calling its (setState) callback every 1000 ms
    clearInterval(this.time);

    this.setState({
      timerOn: false,
    });
  };

  resetTimer = () => {
    clearInterval(this.time);
    this.setState({
      timerOn: false,
      isSession: true,
      sessionDuration: 1500,
      breakDuration: 300,
      sessionTimeLeft: 1500,
      breakTimeLeft: 300,
      sessionNumber: 0,
    });
  };

  toggleVolume = () => {
    this.setState({
      volumeOn: !this.state.volumeOn,
    });
  };

  spacebarHandler = (e) => {
    if (e.keyCode === 32) {
      this.state.timerOn ? this.pauseTimer() : this.startTimer();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.spacebarHandler);
  }

  // Modern browsers remove event listeners on components when they're unmounted, but this is for added safety to prevent memory leaks. See https://stackoverflow.com/questions/53256662/react-why-should-i-remove-event-listeners
  componentWillUnmount() {
    document.removeEventListener('keydown', this.spacebarHandler);
  }

  render() {
    return (
      <Timer
        breakDuration={this.state.breakDuration}
        sessionDuration={this.state.sessionDuration}
        decreaseBreak={this.decreaseBreak}
        increaseBreak={this.increaseBreak}
        decreaseSession={this.decreaseSession}
        increaseSession={this.increaseSession}
        sessionTimeLeft={this.state.sessionTimeLeft}
        breakTimeLeft={this.state.breakTimeLeft}
        timerOn={this.state.timerOn}
        sessionNumber={this.state.sessionNumber}
        isSession={this.state.isSession}
        startTimer={this.startTimer}
        pauseTimer={this.pauseTimer}
        resetTimer={this.resetTimer}
        open={this.state.open}
        onOpenModal={this.onOpenModal}
        onCloseModal={this.onCloseModal}
        volumeOn={this.state.volumeOn}
        toggleVolume={this.toggleVolume}
      />
    );
  }
}

export default App;
