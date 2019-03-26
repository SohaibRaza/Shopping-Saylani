import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import '../../App.css';
import SearchAppBar from './header2'
class Header extends Component {
    render() {
        return (
        <div>
            <SearchAppBar/>
            
        </div>
        );
    }
}

export default Header;
