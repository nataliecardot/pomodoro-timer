import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
const TimeFormat = require('hh-mm-ss');

const Timer = (props) => (

<div className="timer">

  <div className="duration-controls">

    {/* BREAK LENGTH CONTROL */}
    <div className="duration-control-group-with-label">

      <p className="duration-label">Break<br />Length</p>

      <div className="duration-control-group-without-label">
        <FontAwesomeIcon icon={faArrowUp} onClick={props.increaseBreakDuration} className="btn duration-change-btn" size="3x" />

        <p className="duration">{props.breakDuration / 60}</p>

        <FontAwesomeIcon icon={faArrowDown} onClick={props.decreaseBreakDuration} className="btn duration-change-btn" size="3x" />
      </div>

    </div>

    {/* Just for adding space between break/session duration controls */}
    <span className="between-duration-controls" />

    {/* SESSION LENGTH CONTROL */}
    <div className="duration-control-group-with-label">

      <p className="duration-label">Session<br />Length</p>

      <div className="duration-control-group-without-label">
      <FontAwesomeIcon icon={faArrowUp} onClick={props.increaseSessionDuration} className="btn duration-change-btn" size="3x" />

      <p className="duration">{props.sessionDuration / 60}</p>

      <FontAwesomeIcon icon={faArrowDown} onClick={props.decreaseSessionDuration} className="btn duration-change-btn" size="3x" />
      </div>

    </div>

  </div>

  {/* TIME REMAINING */}
  <p className="time-remaining">{TimeFormat.fromS(props.timeRemaining)}</p>

  {/* PLAY, PAUSE, RESTART BUTTONS */}
  <div className="bottom-btns">

    <div className={props.timerOn ? 'hidden' : ''}>
      <FontAwesomeIcon
        role="button"
        onClick={props.startTimer}
        icon={faPlay}
        className="btn bottom-btn"
        size="3x"
      />
    </div>

    <div className={props.timerOn === false ? 'hidden' : ''}>
      <FontAwesomeIcon
        role="button"
        onClick={props.pauseTimer}
        icon={faPause}
        className="btn bottom-btn"
        size="3x"
      />
    </div>

    <FontAwesomeIcon
      role="button"
      onClick={props.resetTimer}
      icon={faUndo}
      className="btn bottom-btn"
      size="3x"
    />

  </div>

</div>

);

export default Timer;
