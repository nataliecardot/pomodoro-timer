import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
const TimeFormat = require('hh-mm-ss');

const DurationControls = props => (
  <div className="duration-controls">

    {/* BREAK LENGTH CONTROL */}
    <div className="duration-control-group-with-label">

      <p className="duration-label">Break<br />Length</p>

      <div className="duration-control-group-without-label">
        <FontAwesomeIcon
          icon={faArrowUp}
          onClick={props.increaseBreakDuration}
          className="duration-change-btn"
          size="2x"
        />

        {/* TODO: divide by 60 again when testing complete */}
        <p className="duration" >{TimeFormat.fromS(props.breakDuration)}</p>

        <FontAwesomeIcon
          icon={faArrowDown} onClick={props.decreaseBreakDuration}
          className="duration-change-btn"
          size="2x"
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
          className="duration-change-btn"
          size="2x"
        />

        {/* TODO: divide by 60 again when testing complete */}
        <p className="duration" >{TimeFormat.fromS(props.sessionDuration)}</p>

        <FontAwesomeIcon
          icon={faArrowDown}
          onClick={props.decreaseSessionDuration}
          className="duration-change-btn"
          size="2x"
        />
      </div> {/* End duration-control-group-without-label */}

    </div> {/* End duration-control-group-with-label */}

  </div> // End duration-controls

);

export default DurationControls;
