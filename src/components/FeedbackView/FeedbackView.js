import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from '../Header/Header';
import FeedbackStepper from '../Stepper/Stepper';
import RadioInput from '../RadioInput/RadioInput';
import TextInput from '../TextInput/TextInput';
import NavButtons from '../NavButtons/NavButtons';

class FeedbackView extends Component {

    render(){
        let displayElement;
        if (this.props.radio){
            displayElement = <RadioInput name={this.props.name} />
        } else if (this.props.text){
            displayElement = <TextInput name={this.props.name} />
        } else {
            displayElement = <p>Thank you for submitting your feedback!</p>
        }

        return(
            <div>
                <Header />
                <FeedbackStepper step={this.props.step}/>
                <p>{this.props.prompt}</p>
                {displayElement}
                <NavButtons next={this.props.next} back={this.props.back}/>
            </div>
        )
    }
}

export default connect()(FeedbackView);