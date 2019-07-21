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
      sessionTimeRemaining: 1500,
      breakTimeRemaining: 300,
      isSession: true,
      timerOn: false,
      sessionNumber: 0,
      open: false, // Modal informing user pomodoro cycle complete
      volumeOn: true
    }
    this.alarm = alarm;
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

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
    if (this.state.volumeOn) {
      this.playAlarm();
    }
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
      sessionDuration: 1500,
      breakDuration: 300,
      sessionTimeRemaining: 1500,
    });
  }

  handleBreakComplete = () => {
    clearInterval(this.time);
    if (this.state.volumeOn) {
      this.playAlarm();
    }
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
      sessionDuration: 1500,
      breakDuration: 300,
      sessionTimeRemaining: 1500,
      breakTimeRemaining: 300,
      sessionNumber: 0
    });
  }

  toggleVolume = () => {
    this.setState({
      volumeOn: !this.state.volumeOn
    })
  }

  spacebarHandler = (e) => {
    if (e.keyCode === 32) {
      this.state.timerOn ? this.pauseTimer() : this.startTimer();
    }
  }

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
        volumeOn={this.state.volumeOn}
        toggleVolume={this.toggleVolume}
      />

    );
  };
}

export default App;
