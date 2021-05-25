import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const UserCard = (props) => {
    const { classes } = props;

    return (
        <div className={classes.drawerProfile}>
            <Avatar className={classes.avatar} alt="Mason Ellwood" src="/static/images/avatar/1.jpg" />
            <div className={classes.personalInfo}>
                <h3 className={classes.h3}>Mason Ellwood</h3>
                <a className={classes.a}>@mason.ellwood</a>
            </div>
        </div>
    );
};

export default withStyles(styles)(UserCard);
