import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import './navCSS.css';


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
    navBar:{
        marginTop:30,
        marginBottom:30,
    },
});

class NavigationBar extends Component {
    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
            <div className={classes.layout}>
                <Paper className={classes.navBar} >
                    <Toolbar variant="dense" >
                        <ul>
                            <li><Link to="/men">Men</Link> </li>
                            <li><Link to="/women" >Women</Link> </li>
                            <li>Sales</li>
                            <li><Link to="/returnpolicy">Return Policy</Link> </li>
                            <li>How to Order</li>
                            <li>Contact Us</li>
                        </ul>
                        
                        {/*{sections.map(section => (
                            <Typography color="inherit" noWrap key={section}>
                            {section}
                            </Typography>
                        ))}*/}
                    </Toolbar>
                </Paper>
            </div>
            </React.Fragment>
        )
    }
}
NavigationBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NavigationBar);