import BottomButtons from './BottomButtons';
import Modal from 'react-responsive-modal';
import React from 'react';
import PomodoroIcons from './PomodoroIcons';
import DurationControls from './DurationControls';
const TimeFormat = require('hh-mm-ss');

const Timer = props => (

<div className="timer">

  <DurationControls
    breakDuration={props.breakDuration}
    sessionDuration={props.sessionDuration}

    increaseBreakDuration={props.increaseBreakDuration}
    decreaseBreakDuration={props.decreaseBreakDuration}

    increaseSessionDuration={props.increaseSessionDuration}
    decreaseSessionDuration={props.decreaseSessionDuration}
  />

  {/* TIME REMAINING */}
  <p className="time-remaining">
    {props.isSession ? TimeFormat.fromS(props.sessionTimeRemaining) : TimeFormat.fromS(props.breakTimeRemaining)}
  </p>

  <BottomButtons
    timerOn={props.timerOn}
    startTimer={props.startTimer}
    pauseTimer={props.pauseTimer}
    resetTimer={props.resetTimer}
  />

  <PomodoroIcons sessionNumber={props.sessionNumber} />

  <Modal open={props.open} onClose={props.onCloseModal} center>
    <p>Great work! You finished a pomodoro cycle (four sessions). Time to take a long break (15–30 minutes). When you're ready to begin another cycle, just click restart.</p>
  </Modal>
</div>

);

export default Timer;
