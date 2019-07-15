import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
const TimeFormat = require('hh-mm-ss');

const Timer = (props) => (

<div className="timer">

  <div className="duration-controls">

    {/* BREAK LENGTH CONTROL */}
    <div className="duration-control-group-with-label">

      <p className="duration-label">Break<br />Length</p>

      <div className="duration-control-group-without-label">
        <FontAwesomeIcon
          icon={faArrowUp}
          onClick={props.increaseBreakDuration}
          className="btn duration-change-btn"
          size="3x"
        />

        {/* TODO: divide by 60 again when testing complete */}
        <p className="duration" >{props.breakDuration}</p>

        <FontAwesomeIcon
          icon={faArrowDown} onClick={props.decreaseBreakDuration}
          className="btn duration-change-btn"
          size="3x"
        />
      </div> {/* End duration-control-group-without-label */}

    </div> {/* End duration-control-group-with-label */}

    {/* Just for adding space between break/session duration controls */}
    <span className="between-duration-controls" />

    {/* SESSION LENGTH CONTROL */}
    <div className="duration-control-group-with-label">

      <p className="duration-label" >Session<br />Length</p>

      <div className="duration-control-group-without-label">
        <FontAwesomeIcon
          icon={faArrowUp}
          onClick={props.increaseSessionDuration}
          className="btn duration-change-btn"
          size="3x"
        />

        {/* TODO: divide by 60 again when testing complete */}
        <p className="duration" >{props.sessionDuration}</p>

        <FontAwesomeIcon
          icon={faArrowDown}
          onClick={props.decreaseSessionDuration}
          className="btn duration-change-btn"
          size="3x"
        />
      </div> {/* End duration-control-group-without-label */}

    </div> {/* End duration-control-group-with-label */}

  </div> {/* End duration-controls */}

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

  </div> {/* End bottom-btns */}

  {/* NUMBER OF POMODOROS (SESSIONS) COMPLETED */}
  <div>
    {/* TODO: display 4 empty circles, replace each with a checked one after session is completed, until 4th session ends */}

    <FontAwesomeIcon
      icon={faCircle}
      size="2x"
      className="pomodoro-unchecked-2 session-checkbox"
    />
    <FontAwesomeIcon
      icon={faCircle}
      size="2x"
      className="pomodoro-unchecked-3 session-checkbox"
    />
    <FontAwesomeIcon
      icon={faCircle}
      size="2x"
      className="pomodoro-unchecked-4 session-checkbox"
    />
    <FontAwesomeIcon
      icon={faCheckCircle}
      size="2x"
      className="pomodoro-checked-1 session-checkbox"
    />
    <FontAwesomeIcon
      icon={faCheckCircle}
      size="2x"
      className="pomodoro-checked-2 session-checkbox"
    />
    <FontAwesomeIcon
      icon={faCheckCircle}
      size="2x"
      className="pomodoro-checked-3 session-checkbox"
    />
    <FontAwesomeIcon
      icon={faCheckCircle}
      size="2x"
      className="pomodoro-checked-4 session-checkbox"
    />
  </div>

</div>

);

export default Timer;
