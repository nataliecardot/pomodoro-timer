import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const PomodoroIcons = (props) => (
  <div>
    <FontAwesomeIcon
      icon={faCircle}
      size="2x"
      className="pomodoro-unchecked-1a session-checkbox"
    />
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
);

export default PomodoroIcons;
