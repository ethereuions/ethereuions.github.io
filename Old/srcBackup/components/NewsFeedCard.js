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
import RefreshIcon from 'material-ui-icons/Refresh';
import IconButton from 'material-ui/IconButton';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import UpdateIcon from 'material-ui-icons/Update';
import MessageIcon from 'material-ui-icons/Message';
import CommentIcon from 'material-ui-icons/Comment';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

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
      card: {
        maxWidth:500,
        maxHeight:550,
        width:490,
        height:350,
        margin:0,
        padding:0,

      },
      
});

function PostCardComp(props) {
  const { classes } = props;
  var text=`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco `;
  return (
    <div className={classes.root}>
      <List disablePadding={true} dense={true}>
      <ListItem>
          <table>
              <tr>
                    <td>
                        <Avatar
                            alt="Photos"
                            classes='verticalTop'
                            src="http://lorempixel.com/50/50"
                            className={classes.bigAvatar}
                        />
                    </td>
                    <td>
                        <table> 
                            <tr>
                                <div><strong>SampleNews</strong><a href="#">&nbsp;.&nbsp;@SampleNews.&nbsp;53m</a></div>
                            </tr>
                            <tr>
                                <ListItemText primary={text} />
                            </tr>
                        </table>
                    </td>
              </tr>
              <tr>
                    <td>
                    </td>
                    <td>
                        <Card className={classes.card}>
                            <CardMedia>
                                <img src="http://lorempixel.com/490/350" alt=""/>
                            </CardMedia>
                        </Card>
                        <span>
                            <IconButton>
                                <CommentIcon
                                    style={{
                                        width: 20,
                                        height: 15,
                                    }}/>
                            </IconButton>
                            <IconButton>
                                <UpdateIcon
                                     style={{
                                        width: 20,
                                        height: 15,
                                    }}/>
                            </IconButton>
                            <IconButton>
                                <ThumbUpIcon
                                     style={{
                                        width: 20,
                                        height: 15,
                                    }}/>
                            </IconButton>
                            <IconButton>
                                <MessageIcon
                                     style={{
                                        width: 20,
                                        height: 15,
                                    }}/>
                            </IconButton>
                        </span>
                  </td>
              </tr>
          </table>
        </ListItem>
      </List>
    </div>
  );
}


PostCardComp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostCardComp);