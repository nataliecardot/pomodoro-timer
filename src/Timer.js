import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Timer = (props) => (

<>

  {/* BREAK LENGTH CONTROL */}
  <div>
  
  <FontAwesomeIcon icon={faArrowUp} />
  <FontAwesomeIcon icon={faArrowDown} />

  </div>

  {/* SESSION LENGTH CONTROL */}
  <div>

  <FontAwesomeIcon icon={faArrowUp} />
  <FontAwesomeIcon icon={faArrowDown} />

  </div>

  {/* TIME REMAINING */}
  <div>{props.timeRemaining}</div>

  {/* PLAY, PAUSE, RESTART BUTTONS */}
  <button onClick={props.startTimer}>Start</button>

  <button onClick={props.pauseTimer}>Pause</button>

  <button onClick={props.resetTimer}>Reset</button>

</>

);

export default Timer;
