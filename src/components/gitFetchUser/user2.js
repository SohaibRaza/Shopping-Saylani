import React,{Component} from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

class User2 extends Component {
    state = { 
        user:{},
        loader:false,
    }
    generateRequest=(e)=>{
        e.preventDefault();
        let names=this.refs.name.value
        console.log()
        this.setState({loader:true})
        let url =`https://api.github.com/users/${this.refs.name.value}`
        axios.get(url)
        .then(res=>{
            console.log(res.data);
            this.setState({
                user:res.data,
                loader:false,
            })
        })
        .catch(err=>{
            this.setState({
                loader:false,
            })
        })
    }

    render() {
        return ( 
            <div>
                
                    <Card>
                        <CardContent>
                            <input type="text" name="option" ref="name"/>
                            {
                                this.state.loader ? ( <button>load..</button>) : (
                                <button onClick={this.generateRequest}>Get User</button>)
                            }
                            <Typography component="h2" variant="h5">
                                github User: {this.state.user.login }
                            </Typography>
                            
                            <Typography component="h2" variant="h5">
                                Followers: {this.state.user.followers}
                            </Typography>
                        </CardContent>
                        <img src={this.state.user.avatar_url} alt=""/>
                    </Card>
                
            </div>
        );
    }
}

export default User2;