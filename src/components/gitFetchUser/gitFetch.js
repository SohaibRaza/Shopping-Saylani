import React,{Component} from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import User1 from './user1'
import User2 from './user2'
import './git.css'
class GitUser extends Component {
    state = { 
        user:{},
        loader:false,
    }

    render() {
        return ( 
            <div>
                <Grid xs={12}  justify="space-around" item container>
                    <User1/>
                    <User2/>
                </Grid>
            </div>
        );
    }
}

export default GitUser;
