import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import React from 'react';

const PomodoroIcons = props => (
  <div>
    {/* If session number is 0, display unchecked circle icon, if any other session number, display checked circle icon */}
    {props.sessionNumber === 0 ?
      <FontAwesomeIcon
        icon={faCircle}
        size="3x"
        className="session-checkbox"
      /> :
      <FontAwesomeIcon
        icon={faCheckCircle}
        size="3x"
        className="session-checkbox"
      />
    }

    {/* If session number is 0 or 1, display unchecked circle icon, if any other session number, display checked circle icon */}
    {props.sessionNumber < 2 ?
      <FontAwesomeIcon
        icon={faCircle}
        size="3x"
        className="session-checkbox"
      /> :
      <FontAwesomeIcon
        icon={faCheckCircle}
        size="3x"
        className="session-checkbox"
      />
    }

    {props.sessionNumber < 3 ?
      <FontAwesomeIcon
        icon={faCircle}
        size="3x"
        className="session-checkbox"
      /> :
      <FontAwesomeIcon
        icon={faCheckCircle}
        size="3x"
        className="session-checkbox"
      />
    }

    {props.sessionNumber < 4 ?
      <FontAwesomeIcon
        icon={faCircle}
        size="3x"
        className="session-checkbox"
      /> :
      <FontAwesomeIcon
        icon={faCheckCircle}
        size="3x"
        className="session-checkbox"
      />
    }
  </div>
);

export default PomodoroIcons;
