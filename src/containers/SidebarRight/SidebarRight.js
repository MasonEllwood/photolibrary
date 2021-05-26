import React from 'react';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import UserCard from '../../components/UserCard/UserCard';

// Material UI
import { withStyles } from '@material-ui/core/styles';

const SidebarRight = (props) => {
    const { classes } = props;

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open="true"
            classes={{
                paper: classes.drawerPaper,
            }}>
            <div className={classes.drawerHeader}>
                <UserCard />
            </div>
            <Divider />
        </Drawer>
    );
};

export default withStyles(styles)(SidebarRight);
