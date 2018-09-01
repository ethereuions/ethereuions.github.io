import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TrendsForYou from './TrendsForYou';
import ProfileCard from './ProfileCard';
import CopyrightComp from './CopyrightComp';
import PostSearchBar from './PostSearchBar';
import WhoToFollow from './WhoToFollow';
import NewsFeedCard from './NewsFeedCard';
import Typography from 'material-ui/Typography';


const styles = theme => ({
    paper: {
      marginTop:25,
      //textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paperTrend:{
        marginTop:10,
    },
    paperCopy:{
        marginTop:10,
    }
  });
  function PageBody(props) {
    const { classes } = props;
        return(
            <div class="container">
                <Grid container spacing={8}>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                            <ProfileCard/>
                            </Paper>
                            <Paper className={classes.paperTrend}>
                            <TrendsForYou items={ITEMS} />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <PostSearchBar/>  
                            </Paper>
                            <Paper>
                                <NewsFeedCard/>  
                            </Paper>
                            <Paper>
                                <NewsFeedCard/>  
                            </Paper>
                            <Paper>
                                <NewsFeedCard/>  
                            </Paper>
                            <Paper>
                                <NewsFeedCard/>  
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                            <WhoToFollow/>
                            </Paper>
                            <Paper className={classes.paperCopy}>
                            <CopyrightComp />
                            </Paper>
                        </Grid>
                </Grid>

            </div>
        );
    }
    PageBody.propTypes = {
        classes: PropTypes.object.isRequired,
      };
      
    export default withStyles(styles)(PageBody);
    
var USERS=[
    {   
        userName:'Abc',
        accountDpLink:'http://lorempixel.com/50/50'
    },
    {   
        userName:'Lorem',
        accountDpLink:'http://lorempixel.com/50/50'
    },
    {   
        userName:'Ipsum',
        accountDpLink:'http://lorempixel.com/50/50'
    },
];    
var ITEMS=[
    {
        itemHeading:'Gujarat Round1',
        itemText:'39.k Tweets',
        itemLink:'#'
    },
    {
        itemHeading:'Gujarat Round1',
        itemText:'39.k Tweets',
        itemLink:'#'
    },
    {
        itemHeading:'Gujarat Round1',
        itemText:'39.k Tweets',
        itemLink:'#'
    },
    {
        itemHeading:'Gujarat Round1',
        itemText:'39.k Tweets',
        itemLink:'#'
    },
    {
        itemHeading:'Gujarat Round1',
        itemText:'39.k Tweets',
        itemLink:'#'
    },
    {
        itemHeading:'Gujarat Round1',
        itemText:'39.k Tweets',
        itemLink:'#'
    },
    {
        itemHeading:'Gujarat Round1',
        itemText:'39.k Tweets',
        itemLink:'#'
    },
    
];