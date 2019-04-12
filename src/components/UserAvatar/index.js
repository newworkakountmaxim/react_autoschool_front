import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  }, 
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

function UserAvatar(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src="http://card.yaa.org.ua/uploads/Admin/proval2.jpg" className={classes.avatar} />      
    </Grid>
  );
}

UserAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserAvatar);