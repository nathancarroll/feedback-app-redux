import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Header from '../Header/Header';
import FeedbackStepper from '../Stepper/Stepper';
import RadioInput from '../RadioInput/RadioInput';
import TextInput from '../TextInput/TextInput';
import NavButtons from '../NavButtons/NavButtons';

class FeedbackView extends Component {

    componentDidMount = () => {
        if (this.props.name !== 'done') return;
        axios.post('/api/feedback', this.props.feedback)
            .then((res) => {
                console.log('feedback posted');
                this.props.dispatch({
                    type: 'RESTART'
                })
            })
            .catch((err) => {
                console.log('error during post', err);
            })
    }

    render(){
        let displayElement;
        if (this.props.radio){
            displayElement = <RadioInput name={this.props.name} />
        } else if (this.props.text){
            displayElement = <TextInput name={this.props.name} />
        } else {
            displayElement = null
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

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(FeedbackView);