import React, { Component } from 'react'
import '../navCSS.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Home } from '@material-ui/icons';
import Items from '../items/items'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

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
        toolbarMain: {
            borderBottom: `1px solid ${theme.palette.grey[300]}`,
        },
        toolbarTitle: {
            flex: 1,
        },

        navStyle: {
        },
        toolbarSecondary: {
            justifyContent: 'space-between',
        },
        mainFeaturedPost: {
            height:"400px",
            backgroundImage: 'url("https://www.brushyourideas.com/wp-content/uploads/2017/09/mob-tshirt.png")',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            color: theme.palette.common.white,
            marginBottom: theme.spacing.unit * 4,

        },
        mainFeaturedPostContent: {
            
            padding: `${theme.spacing.unit * 6}px`,
            [theme.breakpoints.up('md')]: {
            paddingRight: 0,
            },
        },
        mainGrid: {
            marginTop: theme.spacing.unit * 3,
        },
        card: {
            maxWidth:400,
        },
        cardDetails: {
            
        },
        cardMedia: {
            width:"",
        },
        markdown: {
            padding: `${theme.spacing.unit * 3}px 0`,
        },
        sidebarAboutBox: {
            padding: theme.spacing.unit * 2,
            backgroundColor: theme.palette.grey[200],
        },
        sidebarSection: {
            marginTop: theme.spacing.unit * 3,
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            marginTop: theme.spacing.unit * 8,
            padding: `${theme.spacing.unit * 6}px 0`,
        },

    });

    const sections = [
    'Men',
    'Women',
    'Sales',
    'New Arrival',
    'Return Policy',
    'Complain',
    ];
    const navigation={
        Men:"",
        Women:"",
        Sale:"",
        NewArrival:"",
    }

    let imgAddress='E:/React Projects/online-shop/src/components/resources/blackT.jpg'

    const featuredPosts = [
        {
            image: imgAddress,
            title: 'Black T-Shirt',
            date: 'Nov 12',
            description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        },
        {
            title: 'Post title',
            date: 'Nov 11',
            description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        },
    ];

    //const posts = [post1, post2, post3];

    const archives = [
    'March 2020',
    'February 2020',
    'January 2020',
    'December 2019',
    'November 2019',
    'October 2019',
    'September 2019',
    'August 2019',
    'July 2019',
    'June 2019',
    'May 2019',
    'April 2019',
    ];

    const social = ['GitHub', 'Twitter', 'Facebook'];

    function HomePage(props) {
    const { classes } = props;

    return (
        <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
            {/*
            <Toolbar variant="dense" className={classes.toolbarSecondary}>
                <ul className={classes.navStyle}>
                    <li><Link to="/men">Men</Link> </li>
                    <li>,<Link to="/women" >Women</Link> </li>
                    <li>Sales</li>
                    <li>Complaints</li>
                    <li></li>
                </ul>
                
                {/*{sections.map(section => (
                    <Typography color="inherit" noWrap key={section}>
                    {section}
                    </Typography>
                ))}
                </Toolbar>
                */
            }
            <main>
            {/* Main featured post */}
            <Paper className={classes.mainFeaturedPost}>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent} backgroundClassName={classes.mainFeaturedPostContent}>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
            {/* End main featured post */}
            {/* Sub featured posts */}
            <Grid container spacing={40} className={classes.cardGrid}>
                {
                    featuredPosts.map(post => (
                        <Grid item key={post.title} xs={12} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="E:/React Projects/online-shop/src/components/resources/blackT.jpg" // eslint-disable-line max-len
                                    title="Image title"
                                />
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        {post.title}
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        {post.description}
                                    </Typography>
                                    <Typography variant="subtitle1" color="primary">
                                        Continue reading...
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="../resources/blackT.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card>
                            <Items/>
                            <img src={require('E:/React Projects/online-shop/src/components/resources/blackT.jpg')} alt=""/>
                        </Grid>
                    ))
                }
            </Grid>
            {/* End sub featured posts */}
            
            </main>
        </div>
        {/* End footer */}
        </React.Fragment>
    );
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);