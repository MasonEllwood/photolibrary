import React from 'react';
import styles from './styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import AppsIcon from '@material-ui/icons/Apps';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import CollectionsIcon from '@material-ui/icons/Collections';
import AlarmIcon from '@material-ui/icons/Alarm';

import logo from '../../assets/images/Logowhiteicon.png';

// Material UI
import { withStyles } from '@material-ui/core/styles';

const SidebarLeft = (props) => {
    const { classes } = props;

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open="true"
            classes={{
                paper: classes.drawerPaper,
            }}>
            <div className={classes.drawerHeader}>
                <img className={classes.logo} src={logo} alt="Krunkto Logo" />
            </div>
            <div className={classes.iconButton}>
                <IconButton color="secondary" aria-label="all apps">
                    <AppsIcon fontSize="large" />
                </IconButton>
            </div>
            <div className={classes.iconButton}>
                <IconButton color="secondary" aria-label="trending up">
                    <TrendingUpIcon fontSize="large" />
                </IconButton>
            </div>
            <div className={classes.iconButton}>
                <IconButton color="secondary" aria-label="trending down">
                    <TrendingDownIcon fontSize="large" />
                </IconButton>
            </div>
            <div className={classes.iconButton}>
                <IconButton color="secondary" aria-label="collections">
                    <CollectionsIcon fontSize="large" />
                </IconButton>
            </div>
            <div className={classes.iconButton}>
                <IconButton color="secondary" aria-label="set alarm">
                    <AlarmIcon fontSize="large" />
                </IconButton>
            </div>
        </Drawer>
    );
};

export default withStyles(styles)(SidebarLeft);
