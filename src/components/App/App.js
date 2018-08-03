import React, { Component } from 'react';

import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Header from '../Header/Header';
import HorizontalLabelPositionBelowStepper from '../Stepper/Stepper';
import FeedbackView from '../FeedbackView/FeedbackView';
import './App.css';

class App extends Component {
  pageSettings = [{
      name: 'feeling',
      prompt: 'How are you feeling today?',
      radio: true,
      text: false,
      next: 'understanding'
    },
    {
      name: 'understanding',
      prompt: 'How well did you understand today\'s material?',
      radio: true,
      text: false,
      next: 'support'
    },
    {
      name: 'support',
      prompt: 'Did you feel supported by Prime staff today?',
      radio: true,
      text: false,
      next: 'comments'
    },
    {
      name: 'comments',
      prompt: 'Any comments you want to leave?',
      radio: false,
      text: true,
      next: 'done'
    }]

  render() {
    return (
      <div className="App">
        <Header />
        <HorizontalLabelPositionBelowStepper />
        <FeedbackView {...this.pageSettings[1]} />
      </div>
    );
  }
}

export default App;
