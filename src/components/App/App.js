import React, { Component } from 'react';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import FeedbackView from '../FeedbackView/FeedbackView';
import './App.css';

class App extends Component {
  pageSettings = [{
    name: 'feeling',
    prompt: 'How are you feeling today?',
    radio: true,
    text: false,
    next: '/#/understanding',
    back: false
  },
  {
    name: 'understanding',
    prompt: 'How well did you understand today\'s material?',
    radio: true,
    text: false,
    next: '/#/support',
    back: '/#/feeling'
  },
  {
    name: 'support',
    prompt: 'Did you feel supported by Prime staff today?',
    radio: true,
    text: false,
    next: '/#/comments',
    back: '/#/understanding'
  },
  {
    name: 'comments',
    prompt: 'Any comments you want to leave?',
    radio: false,
    text: true,
    next: '/#/done',
    back: '/#/support'
  },
  {
    name: 'done',
    prompt: 'Thank you for submitting your feedback!',
    radio: false,
    text: false,
    next: '/#/feeling',
    back: false
  }]

  render() {
    const allRoutes = this.pageSettings.map((pageConfig, index) => {
      return (
        <Route
          key={index}
          exact path={'/' + pageConfig.name}
          render={() => <FeedbackView step={index} {...pageConfig} />}
        />
      )
    })

    return (
      <div className="App">
        <Router>
          <div>
            {allRoutes}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
