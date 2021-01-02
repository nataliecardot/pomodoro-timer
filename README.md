Pomodoro Timer
======

An app for managing time using the pomodoro technique.

**Features:**

* Customizable break and session durations
* Session completion indicated with checkboxes
* An alarm sound that you can toggle on/off
* You can play, pause, and reset
* Toggle pause/play on spacebar press
* A modal is opened at the end of four sessions

View live [here](https://nataliecardot.com/pomodoro-timer/).

To view locally:
1. Clone or download this repository
2. Using a command line tool, navigate to the directory's location
3. Run `npm install`, which installs all modules listed as dependencies in `package.json`.
4. Run `npm start` to run the app in development mode, opening the app in your default browser. (The command causes node to look for a `scripts` object in your `package.json` file, which in this case specifies "react-scripts start."). You also may open the app on the local server by navigating to http://localhost:3000/ in your browser.

### Notes

This app was built using React. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), which installs the packages `react`, `react-dom`, and `react-scripts`. Additionally, `react-scripts` installs Babel, webpack, and `webpack-dev-server`, which provides auto-reload behavior, as well as provides a service worker.
