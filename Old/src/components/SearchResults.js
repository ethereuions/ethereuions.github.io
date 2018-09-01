import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ToolbarGroup from 'material-ui/Toolbar'
import Button from 'material-ui/Button';
import SearchCardPrimary from './SearchCardPrimary';
import SearchCardSecondary from './SearchCardSecondary';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import RelatedSearches from './RelatedSearches';
import TrendsForYou from './TrendsForYou';
import CopyrightComp from './CopyrightComp';
import PostSearchBar from './PostSearchBar';
import WhoToFollow from './WhoToFollow';
import NewsFeedCard from './NewsFeedCard';


export default class SearchResults extends Component{
    render(){
        return(
           <div>
                <AppBar position="static" color="default" className="searchResultBar">
                        <Toolbar className="container">
                        <Typography type="title" color="inherit">
                        {this.props.input}
                        </Typography>
                        </Toolbar>
                </AppBar>
                <AppBar position="static" color="default" className="searchResultBar">
                        <div>
                        <Toolbar className="container">
                        <ToolbarGroup> 
                        <Button color="contrast" dense='true' className='button-label'>
                          Top
                        </Button>
                        <Button color="contrast"  dense='true' className='button-label'>
                          Latest
                        </Button>
                        <Button color="contrast"  dense='true'className='button-label'>
                          People
                        </Button>
                        <Button color="contrast" dense='true'className='button-label'>
                          Photos 
                        </Button>
                        <Button color="contrast"  dense='true' className='button-label'>
                          Vidoes
                        </Button>
                        <Button color="contrast"  dense='true'className='button-label'>
                          News
                        </Button>
                        <Button color="contrast"  dense='true'className='button-label'>
                          BroadCast
                        </Button>
                      </ToolbarGroup> 
                    </Toolbar>
                    </div> 
                </AppBar>
                <div className="container">
                <Grid container spacing={8}>
                        <Grid item xs={3}>
                            <br/>
                            <Paper >
                            <RelatedSearches items={ITEMS}/>
                            </Paper>
                            <br/>
                            <Paper >
                            <WhoToFollow/>
                            </Paper>
                            <Paper >
                            <TrendsForYou items={ITEMS} />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                        <br/>
                            <Paper >
                            <SearchCardPrimary/>
                            </Paper >
                            <br/>
                            <Paper >
                            <SearchCardSecondary/>
                            </Paper>
                            <br/>
                            <Paper >
                                <PostSearchBar/>  
                            </Paper>
                            <Paper>
                                <NewsFeedCard/>  
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <br/>
                            <Paper>
                            <CopyrightComp />
                            </Paper>
                        </Grid>
                </Grid>
                </div>

           </div>
        );
    }
}

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
    }
]