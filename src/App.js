import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import HomePage from './components/Home/Home'
import SignUp from './components/SignUp'
import SignIn from './components/Signin'
import Footer from './components/Footer'
import Grid from '@material-ui/core/Grid';
import NavigationBar from './components/NavigationBar'
import Men from './components/men'
import Women from './components/women'
import ReturnPolicy from './components/returnPolicy'
import GitFetch from './components/gitFetchUser/gitFetch'


const styles = theme => ({
  '@global': {
      body: {
          backgroundColor: theme.palette.common.white,
      },
  },
  layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
          width: 900,
          marginLeft: 'auto',
          marginRight: 'auto',
          },
      },
      heroContent: {
          maxWidth: 600,
          margin: '0 auto',
          padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
      },
});


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Header/>
            <NavigationBar/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/men" component={Men}/>
            <Route path="/women" component={Women} />
            <Route path="/returnpolicy" component={ReturnPolicy} />
            <Footer/> 

            {/*<GitFetch/>*/}
          </div>
        </BrowserRouter>
        
      </React.Fragment>
    );
  }
}

export default App;
