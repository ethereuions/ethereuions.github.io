import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import MailIcon from 'material-ui-icons/Mail';
import pink from 'material-ui/colors/pink';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
    bigAvatar: {
        margin: 5,
        width: 50,
        height: 50,
    },
    pinkAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: pink[500],
      },
      
});

function WhoToFollow(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <div id="TrendsForYou">
            <span><strong>Who To Follow</strong><a href="#">&nbsp;.&nbsp;Change.&nbsp;ViewAll</a></span>
            </div>
      <List disablePadding={true} dense={true}>
                <ListItem>
                    <table>
                        <tr>
                            <td>
                                <Avatar
                                alt="Photos"
                                src="http://lorempixel.com/50/50"
                                className={classes.bigAvatar}
                                />
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <div id='whoToFollow'><strong>Hasura Ed</strong><a href="#">&nbsp;.&nbsp;@HasuraEd</a></div>
                                    </tr>
                                    <tr>
                                        <Button id="followButton" dense={true} color="contrast">
                                            Follow
                                        </Button>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </ListItem>
                <ListItem>
                    <table>
                        <tr>
                            <td>
                                <Avatar
                                alt="Photos"
                                src="http://lorempixel.com/50/50"
                                className={classes.bigAvatar}
                                />
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <div id='whoToFollow'><strong>Product Hunt</strong><a href="#">&nbsp;.&nbsp;@Product Hunt</a></div>
                                    </tr>
                                    <tr>
                                        <Button id="followButton" dense={true} color="contrast">
                                            Follow
                                        </Button>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </ListItem>
                <ListItem>
                    <table>
                        <tr>
                            <td>
                                <Avatar
                                alt="Photos"
                                src="http://lorempixel.com/50/50"
                                className={classes.bigAvatar}
                                />
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <div id='whoToFollow'><strong>Hasura</strong><a href="#">&nbsp;.&nbsp;@Hasura</a></div>
                                    </tr>
                                    <tr>
                                        <Button id="followButton" dense={true} color="contrast">
                                            Follow
                                        </Button>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </ListItem>
                {/*this is the default one for importing the gmail contacts*/}
                <ListItem>
                    <Avatar  className={classNames(classes.bigAvatar,classes.pinkAvatar)}>
                        <MailIcon/>
                    </Avatar>
                    <Grid>
                        <ListItemText primary="Find people you know" secondary="Import your contacts from Gmail"/>
                    </Grid>
                </ListItem>
                <ListItem>
                    <a href="#">Connect to Other Address Book</a>
                </ListItem>    
     </List>
    </div>
  );
}


WhoToFollow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhoToFollow);