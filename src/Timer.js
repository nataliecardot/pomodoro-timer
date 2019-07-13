import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

const Timer = (props) => (

<>

  {/* BREAK LENGTH CONTROL */}
  <div>

  <FontAwesomeIcon icon={faArrowUp} onClick={props.increaseBreakDuration} className="btn" size="3x">
    <p>{props.breakDuration}</p>
  </FontAwesomeIcon>

  <FontAwesomeIcon icon={faArrowDown} onClick={props.decreaseBreakDuration} className="btn" size="3x">
    <p>{props.breakDuration}</p>
  </FontAwesomeIcon>

  </div>

  {/* SESSION LENGTH CONTROL */}
  <div>

  <FontAwesomeIcon icon={faArrowUp} onClick={props.increaseSessionDuration} className="btn" size="3x">
    <p>{props.sessionDuration}</p>
  </FontAwesomeIcon>

  <FontAwesomeIcon icon={faArrowDown} onClick={props.decreaseSessionDuration} className="btn" size="3x">
    <p>{props.sessionDuration}</p>
  </FontAwesomeIcon>

  </div>

  {/* TIME REMAINING */}
  <p className="time-remaining">{props.timeRemaining}</p>

  {/* RESTART, PLAY, PAUSE BUTTONS */}
  <FontAwesomeIcon icon={faUndo} onClick={props.resetTimer} className="btn" size="3x" />

  <FontAwesomeIcon icon={faPlay} onClick={props.startTimer} className="btn" size="3x" />

  <FontAwesomeIcon icon={faPause} onClick={props.pauseTimer} className="btn" size="3x" />

</>

);

export default Timer;
