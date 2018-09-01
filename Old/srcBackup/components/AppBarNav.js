import React from 'react';
import './custom.css'; 
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar'
import Button from 'material-ui/Button';
import HomeIcon from 'material-ui-icons/Home';
import MessageIcon from 'material-ui-icons/Message';
import Avatar from 'material-ui/Avatar';
import NotificationsIcon from 'material-ui-icons/Notifications';
import deepOrange from 'material-ui/colors/deepOrange';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import SearchResults from './SearchResults';
import SearchIcon from 'material-ui-icons/Search';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
  root: {
    //marginTop: theme.spacing.unit * 3,
    width: '100%',
    height:'46px',
  },
  button: {
    //marginLeft: theme.spacing.unit*16,
    //marginRight: theme.spacing.unit*16,
  },
  orangeAvatar: {
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  avatar:{
    margin:'1px',
  }
  
});



function AppBarNav(props) {
  function searchHandle(e){
    console.log(document.getElementById('search').value);
    input=document.getElementById('search').value;
    document.getElementById('search').value="";
    return
  };
  const { classes } = props;
  var input="NULL";
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className='appbar'>
        <Toolbar>
          <ToolbarGroup className="container"> 
              <Grid container spacing={24}>
                  <Grid item xs alignContent='left'>
                    <ToolbarGroup> 
                      <Button color="contrast" disabled='true' dense='true'>
                        <HomeIcon/>
                        Home
                      </Button>
                      <Button color="contrast"  dense='true' className='button-label'>
                        <NotificationsIcon/>
                        Notifications
                      </Button>
                      <Button color="contrast"  dense='true'className='button-label'>
                        <MessageIcon/>
                        Messages
                      </Button>
                    </ToolbarGroup> 
                  </Grid>

                  <Grid item alignItems='center' >
                    <ToolbarGroup>
                      <Button className={classes.button}> 
                        <Avatar className={classes.orangeAvatar}><img src="https://firebasestorage.googleapis.com/v0/b/fir-chat-2a1fe.appspot.com/o/chat_photos%2FhasuraMini.png?alt=media&token=8242c7f4-8950-47d5-90ab-020619303ccd" alt="H"/></Avatar>
                      </Button>
                      </ToolbarGroup>
                  </Grid>

                  <Grid item xs   alignItems="right">
                    <ToolbarGroup>
                        <TextField
                          id="search"
                          type="search"
                          className={classes.textField}
                          margin="normal"
                          placeholder='Search Hasura '
                          InputProps={{
                            disableUnderline: true,
                            
                          }}
                        />
                        <IconButton color="accent" onClick={searchHandle}>
                          <SearchIcon/>
                        </IconButton>
                        <Button> 
                          <Avatar className={classes.orangeAvatar} ><img src="http://lorempixel.com/g/50/50" alt="H"/></Avatar>
                        </Button>
                        <Button id="hasuraButtonNav" color="contrast">
                          Hasura
                        </Button>
                        </ToolbarGroup>
                  </Grid>
              </Grid>
          </ToolbarGroup>  
        </Toolbar>
      </AppBar>
    </div>
    
    
  );
}

AppBarNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarNav);