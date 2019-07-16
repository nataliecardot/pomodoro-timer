import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
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

  {/* PLAY, PAUSE, RESTART BUTTONS */}
  <div className="bottom-btns">

    <div className={props.timerOn ? 'hidden' : ''}>
      <FontAwesomeIcon
        role="button"
        onClick={props.startTimer}
        icon={faPlay}
        className="btn bottom-btn"
        size="4x"
      />
    </div>

    <div className={props.timerOn === false ? 'hidden' : ''}>
      <FontAwesomeIcon
        role="button"
        onClick={props.pauseTimer}
        icon={faPause}
        className="btn bottom-btn"
        size="4x"
      />
    </div>

    <FontAwesomeIcon
      role="button"
      onClick={props.resetTimer}
      icon={faUndo}
      className="btn bottom-btn"
      size="4x"
    />

  </div> {/* End bottom-btns */}

  <PomodoroIcons sessionNumber={props.sessionNumber} />
</div>

);

export default Timer;
