import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';

// Containers
import SidebarLeft from '../SidebarLeft';
import SidebarRight from '../SidebarRight';

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

    console.log(menuItem);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={clsx(classes.appBar, classes.appBarShift)}>
                <MenuList
                    menuChange={(e) => {
                        handleMenuChange(e);
                    }}
                />
            </AppBar>
            <SidebarLeft
                menuChange={(e) => {
                    handleMenuChange(e);
                }}
            />
            <main className={(classes.content, classes.contentShift)}>
                <div className={classes.drawerHeader} />
                {menuItem === 'home' ? <Home /> : <Profile />}
            </main>
            <SidebarRight />
        </div>
    );
};

export default withStyles(styles)(Main);
