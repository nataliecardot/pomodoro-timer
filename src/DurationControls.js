import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
const TimeFormat = require('hh-mm-ss');

const DurationControls = ({
  breakDuration,
  sessionDuration,
  increaseBreak,
  decreaseBreak,
  increaseSession,
  decreaseSession,
}) => (
  <div className="duration-controls">
    {/* BREAK LENGTH CONTROL */}
    <div className="duration-control-group-with-label">
      <p className="duration-label">Break</p>
      <div className="duration-control-group-without-label">
        <FontAwesomeIcon
          icon={faArrowUp}
          onClick={increaseBreak}
          className="btn duration-change-btn"
          size="2x"
        />

        <p className="duration">{TimeFormat.fromS(breakDuration)}</p>

        <FontAwesomeIcon
          icon={faArrowDown}
          onClick={decreaseBreak}
          className="btn duration-change-btn"
          size="2x"
        />
      </div>{' '}
      {/* End duration-control-group-without-label */}
    </div>{' '}
    {/* End duration-control-group-with-label */}
    {/* Just for adding space between break/session duration controls */}
    <span className="between-duration-controls" />
    {/* SESSION LENGTH CONTROL */}
    <div className="duration-control-group-with-label">
      <p className="duration-label">Session</p>
      <div className="duration-control-group-without-label">
        <FontAwesomeIcon
          icon={faArrowUp}
          onClick={increaseSession}
          className="btn duration-change-btn"
          size="2x"
        />

        <p className="duration">{TimeFormat.fromS(sessionDuration)}</p>

        <FontAwesomeIcon
          icon={faArrowDown}
          onClick={decreaseSession}
          className="btn duration-change-btn"
          size="2x"
        />
      </div>{' '}
      {/* End duration-control-group-without-label */}
    </div>{' '}
    {/* End duration-control-group-with-label */}
  </div> // End duration-controls
);

export default DurationControls;
