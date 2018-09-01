
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import './custom.css';
import Grid from 'material-ui/Grid';


const styles = {
  card: {
    maxWidth: 345,
  },
};

function SearchCardPrimary(props) {
  //const { classes } = props;
  return (
    <div>
      <a class="DashboardProfileCard-bg u-bgUserColor u-block" href="#" tabindex="-1" aria-hidden="true" rel="noopener">
      </a>
            <div class=" DashboardProfileCard-content">
                <Grid container xs>
                <Grid item>
                <a href="#" title="Search Card Primary " tabindex="-1" aria-hidden="true" rel="noopener">
                    <img class="DashboardProfileCard-avatarImage" src="http://lorempixel.com/g/100/100" alt=""/>
                </a>
                </Grid>
                <Grid item>
                    <div>
                    <strong color='primary'>
                    <a href="#" rel="noopener">Search Results</a><span class="UserBadges"></span>
                    </strong>
                    <div class="DashboardProfileCard-screenname u-inlineBlock u-dir" dir="ltr">
                    
                    <a class="DashboardProfileCard-screennameLink u-linkComplex u-linkClean" href="#" rel="noopener"><span class="username u-dir" dir="ltr">@<b class="u-linkComplex-target">SearchCardPrimary</b></span></a>
                    <Button id="followButton" dense={true} color="contrast">
                        Follow
                    </Button>
                    </div>
                    </div>
                </Grid>

                </Grid>
                <div class="ProfileCardStats">
                    <ul class="ProfileCardStats-statList Arrange Arrange--bottom Arrange--equal">
                                <a class="ProfileCardStats-statLink u-textUserColor u-linkClean u-block js-nav js-tooltip" title="2 Tweets" href="#" data-element-term="tweet_stats">
                                <span class="ProfileCardStats-statLabel u-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </span>
                                <span class="ProfileCardStats-statValue" data-count="2" data-is-compact="false">SearchCardPrimary</span>
                                </a>
                    </ul>
                </div>
                <div id="dashboard-profile-prompt">
                </div>
            </div>
    </div>
  );
}

SearchCardPrimary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchCardPrimary);