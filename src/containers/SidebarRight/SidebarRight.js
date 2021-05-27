import React from 'react';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import UserCard from '../../components/UserCard/UserCard';
import { connect } from 'react-redux';

// Material UI
import { withStyles } from '@material-ui/core/styles';

const SidebarRight = (props) => {
    const { classes } = props;
    console.log(props);
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

// all props
// const mapStateToProps = (store) => ({whatever: store});
// only trending
const mapStateToProps = (store) => ({ trending: store.trending });

export default connect(mapStateToProps)(withStyles(styles)(SidebarRight));
