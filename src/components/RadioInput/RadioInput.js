import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import {connect} from 'react-redux';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class RadioInput extends React.Component {

    handleChange = event => {
        this.props.dispatch({
            type: 'FEEDBACK_STEP',
            payload: {
                [this.props.name]: event.target.value
            }
        })
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Choose a Number</FormLabel>
                    <RadioGroup
                        aria-label={this.props.name}
                        name={this.props.name}
                        className={classes.group}
                        value={this.props.feedback[this.props.name]}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4" />
                        <FormControlLabel value="5" control={<Radio />} label="5" />
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

const styledComponent = withStyles(styles)(RadioInput);
export default connect(mapStateToProps)(styledComponent);