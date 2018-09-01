
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import './custom.css';
import Grid from 'material-ui/Grid';


const styles = {
  card: {
    maxWidth: 345,
  },
};

function ProfileCard(props) {
//  const { classes } = props;
  return (
    <div>
      <a class="DashboardProfileCard-bg u-bgUserColor u-block" href="#" tabindex="-1" aria-hidden="true" rel="noopener">
      </a>
            <div class=" DashboardProfileCard-content">
                <Grid container xs>
                <Grid item>
                <a href="#" title="Nandu Kishor Nanda" tabindex="-1" aria-hidden="true" rel="noopener">
                    <img class="DashboardProfileCard-avatarImage" src="https://pbs.twimg.com/profile_images/900978338377850880/jW8_yPaS_bigger.jpg" alt=""/>
                </a>
                </Grid>
                <Grid item>
                    <div>
                    <strong color='primary'>
                    <a href="#" rel="noopener">Nandu Kishor Nanda</a><span class="UserBadges"></span>
                    </strong>
                    <div class="DashboardProfileCard-screenname u-inlineBlock u-dir" dir="ltr">
                    
                    <a class="DashboardProfileCard-screennameLink u-linkComplex u-linkClean" href="#" rel="noopener"><span class="username u-dir" dir="ltr">@<b class="u-linkComplex-target">NanduKishorNand</b></span></a>
                    </div>
                    </div>
                </Grid>

                </Grid>
                <div class="ProfileCardStats">
                    <ul class="ProfileCardStats-statList Arrange Arrange--bottom Arrange--equal">
                        <Grid container >
                            <Grid item xs>
                                <a class="ProfileCardStats-statLink u-textUserColor u-linkClean u-block js-nav js-tooltip" title="2 Tweets" href="#" data-element-term="tweet_stats">
                                <span class="ProfileCardStats-statLabel u-block">Tweets</span>
                                <span class="ProfileCardStats-statValue" data-count="2" data-is-compact="false">2</span>
                                </a>
                            </Grid>
                            <Grid item xs>
                                <a class="ProfileCardStats-statLink u-textUserColor u-linkClean u-block js-nav js-tooltip" title="6 Following" href="#" data-element-term="following_stats">
                                    <span class="ProfileCardStats-statLabel u-block">Following</span>
                                    <span class="ProfileCardStats-statValue" data-count="6" data-is-compact="false">6</span>
                                </a>
                            </Grid>
                            <Grid item xs>
                                <a class="ProfileCardStats-statLink u-textUserColor u-linkClean u-block js-nav js-tooltip" href="#" data-element-term="follower_stats" data-original-title="4 Followers">
                                    <span class="ProfileCardStats-statLabel u-block">Followers</span>
                                    <span class="ProfileCardStats-statValue" data-count="4" data-is-compact="false">4</span>
                                </a>
                            </Grid>
                        </Grid>
                    </ul>
                </div>
                <div id="dashboard-profile-prompt">
                </div>
            </div>
    </div>
  );
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileCard);