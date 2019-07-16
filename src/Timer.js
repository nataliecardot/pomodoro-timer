import BottomButtons from './BottomButtons';
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
</div>

);

export default Timer;
