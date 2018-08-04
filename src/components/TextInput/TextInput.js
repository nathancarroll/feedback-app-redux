import React, {Component} from 'react';
import {connect} from 'react-redux';

class TextInput extends Component {

    handleChange = event => {
        // this.setState({ value: event.target.value });
        this.props.dispatch({
            type: 'FEEDBACK_STEP',
            payload: {
                [this.props.name]: event.target.value
            }
        })
    };

    render(){
        return(
            <div>
                <textarea rows="8" cols="32" onChange={this.handleChange}/>
            </div>
        )
    }
}

export default connect()(TextInput);