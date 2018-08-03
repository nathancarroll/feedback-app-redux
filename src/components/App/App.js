import React, { Component } from 'react';

import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Header from '../Header/Header';
import HorizontalLabelPositionBelowStepper from '../Stepper/Stepper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HorizontalLabelPositionBelowStepper />
      </div>
    );
  }
}

export default App;
