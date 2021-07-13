import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';

// Components
import MenuList from '../../components/MenuList';
import Home from '../../components/Home';
import Profile from '../../components/Profile';

// Material UI
import { withStyles } from '@material-ui/core/styles';

// Styles
import styles from './styles';

const Main = (props) => {
    const [menuItem, setMenuItem] = useState('home');
    const { classes } = props;

    function handleMenuChange(e) {
        setMenuItem(e);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="transparent"
                elevation={0}
                className={(classes.appBar, classes.appBarShift)}>
                <MenuList
                    menuChange={(e) => {
                        handleMenuChange(e);
                    }}
                />
            </AppBar>
            <main className={(classes.content, classes.contentShift)}>
                <div className={classes.drawerHeader} />
                {menuItem === 'home' ? <Home /> : <Profile />}
            </main>
        </div>
    );
};

export default withStyles(styles)(Main);
