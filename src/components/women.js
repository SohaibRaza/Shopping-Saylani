import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
        },
    },
});
class Women extends Component {
    state = {  }
    render() { 
        const { classes } = this.props;
        return ( 
            <div className={classes.layout}>
                <h1>Women</h1>
            </div> 
        );
    }
}
Women.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Women);
