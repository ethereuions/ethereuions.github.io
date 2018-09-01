import React, { Component } from 'react';
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
import CloseIcon from 'material-ui-icons/Close'
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

class AppBarNavB extends Component {
  constructor(){
    super();
    this.state = {
      inputText:'hi',
      showComponent: false,
    };
    this.searchHandle = this.searchHandle.bind(this);
  }
  searchHandle(e) {
    if(document.getElementById('search').value==''&&this.state.showComponent==false){
      window.alert("Enter some search string");
    }
    else{
      if(this.state.showComponent==false){
      this.setState({
        showComponent: true,
      });
      }
      else{
        this.setState({
          showComponent: false,
        });
      }
      this.setState({inputText:document.getElementById('search').value});
      document.getElementById('search').value='';
    }
  }
  render(){
  return (
    <div >
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
                      <Button> 
                        <Avatar><img src="https://firebasestorage.googleapis.com/v0/b/fir-chat-2a1fe.appspot.com/o/chat_photos%2FhasuraMini.png?alt=media&token=8242c7f4-8950-47d5-90ab-020619303ccd" alt="H"/></Avatar>
                      </Button>
                      </ToolbarGroup>
                  </Grid>

                  <Grid item xs   alignItems="right">
                    <ToolbarGroup>
                        <TextField
                          id="search"
                          type="search"
                          margin="normal"
                          placeholder='Search Hasura '
                          InputProps={{
                            disableUnderline: true,
                            
                          }}
                        />
                        <IconButton color="accent" onClick={this.searchHandle}>
                          {this.state.showComponent ?
                              <CloseIcon/> :
                              <SearchIcon/>
                            }
                        </IconButton>
                        <Button> 
                          <Avatar><img src="http://lorempixel.com/g/50/50" alt="H"/></Avatar>
                        </Button>
                        <Button id="hasuraButtonNav" color="contrast">
                          Hasura
                        </Button>
                        </ToolbarGroup>
                  </Grid>
              </Grid>
          </ToolbarGroup>  
        </Toolbar>
        {this.state.showComponent ?
           <SearchResults input={this.state.inputText}/> :
           null
        }
      </AppBar>
    </div>
      );
}
}

export default AppBarNavB;