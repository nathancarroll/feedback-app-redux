import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from '../Header/Header';
import FeedbackStepper from '../Stepper/Stepper';
import RadioInput from '../RadioInput/RadioInput';
import NavButtons from '../NavButtons/NavButtons';

class FeedbackView extends Component {
    constructor(props){
        super(props)
        this.state = {
            [this.props.name]: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [this.props.name]: event.target.value
        })
    }

    handleNext = () => {
        this.props.dispatch({
            type: 'FEEDBACK_STEP',
            payload: this.state
        })
        window.location.href = this.props.next;
    }

    render(){
        return(
            <div>
                <Header />
                <FeedbackStepper step={this.props.step}/>
                <p>{this.props.prompt}</p>
                <RadioInput name={this.props.name}/>
                <NavButtons next={this.props.next} back={this.props.back}/>
            </div>
        )
    }
}

export default connect()(FeedbackView);