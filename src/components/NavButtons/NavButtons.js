import React, {Component} from 'react';
import { Button } from '@material-ui/core';

class NavButtons extends Component {

    render(){
        return(
            <div>
            <Button
                disabled={this.props.back === false}
                onClick={() => window.location.href = this.props.back}
                >
                Back
            </Button>
            <Button
                onClick={() => window.location.href = this.props.next}
            >
                {this.props.next === '/#/feeling' ? 'Reset' : 'Next'}
            </Button>
            </div>
        )
    }
}

export default NavButtons;