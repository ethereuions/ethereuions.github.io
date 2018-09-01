import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import PhotoIcon from 'material-ui-icons/Photo';



const styles = {
row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};
function PostSearchBar(props) {
  const { classes } = props;
  return (
    <div className={classes.row} id="postSearch">
      <Avatar alt="UserDp" src="http://lorempixel.com/50/50" className={classes.avatar} />
        <div id="searchComp">
            <TextField
                          id="width"
                          type="search"
                          className={classes.textField}
                          margin="normal"
                          placeholder="What's Happening?"
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
            <PhotoIcon/>
        </div>
    </div>
  );
}
PostSearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostSearchBar);