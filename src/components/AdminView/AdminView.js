import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Header from '../Header/Header';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class AdminView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feedbackList: []
        }
    }

    componentDidMount = () => {
        this.getFeedback();
    }

    getFeedback = () => {
        axios.get('/api/feedback')
        .then((res) => {
            console.log(res.data);
            this.setState({
                feedbackList: res.data
            })
        })
        .catch((err) => {
            console.log('error during feedback get', err);
        })
    }

    handleDelete = (ID) => {
        axios.delete(`/api/feedback/${ID}`)
            .then((res) => {
                console.log(res);
                this.getFeedback();
            })
            .catch((err) => {
                console.log('error during delete', err);
            })
    }

    render() {
        return (
            <div>
            <Header admin />
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Understanding</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Delete</TableCell>                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.feedbackList.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell component="th" scope="row">{n.feeling}</TableCell>
                                    <TableCell>{n.understanding}</TableCell>
                                    <TableCell>{n.support}</TableCell>
                                    <TableCell>{n.comments}</TableCell>
                                    <TableCell>{n.date.split('T05')[0]}</TableCell>
                                    <TableCell><button onClick={() => this.handleDelete(n.id)}>Delete</button></TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(AdminView);