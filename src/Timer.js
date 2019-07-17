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
    volumeOn={props.volumeOn}
    toggleVolume={props.toggleVolume}
  />

  <PomodoroIcons sessionNumber={props.sessionNumber} />

  <Modal
    modalId="modal"
    open={props.open}
    onClose={props.onCloseModal}
    center
    className="modal"
  >
    <div className="modal-text">
      <p>You finished a pomodoro cycle—great work!</p>
      <p>Time to take a long break (15–30 minutes). When you're ready to begin another cycle, just click restart. (Or come back another day.)</p>
    </div>
  </Modal>
</div>

);

export default Timer;
