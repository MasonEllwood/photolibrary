import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import styles from './styles';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import ProfileImage from '../../assets/images/profile-photo.jpeg';

const UserCard = (props) => {
    const { classes } = props;

    return (
        <div className={classes.drawerProfile}>
            <div className={classes.iconButton}>
                <IconButton color="secondary" aria-label="trending down">
                    <NotificationsNoneIcon fontSize="large" />
                </IconButton>
            </div>
            <Avatar className={classes.large} alt="Mason Ellwood" src={ProfileImage} />
        </div>
    );
};

export default withStyles(styles)(UserCard);
