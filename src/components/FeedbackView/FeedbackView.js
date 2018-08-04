import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from '../Header/Header';
import FeedbackStepper from '../Stepper/Stepper';

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
        console.log('next is', this.props.next);
        this.props.dispatch({
            type: 'FEEDBACK_STEP',
            payload: this.state
        })
        // this.props.history.push(`/${this.props.next}`);
        window.location.href = this.props.next;
    }

    render(){
        return(
            <div>
                <Header />
                <FeedbackStepper step={this.props.step}/>
                <p>{this.props.prompt}</p>
                <input onChange={this.handleChange} type="text" />
                <button onClick={this.handleNext}>Next</button>
            </div>
        )
    }
}

export default connect()(FeedbackView);