import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
import styles from './styles';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import InstagramIcon from '@material-ui/icons/Instagram';
// import Searchbar from '../Searchbar';

// import { useHistory } from 'react-router';

const MenuList = (props) => {
    const { classes } = props;
    // const history = useHistory();

    return (
        <div className={classes.menuList}>
            <Toolbar className={classes.toolbar}>
                <MenuTwoToneIcon fontSize="large" color="primary" />
                <h1 className={classes.menuItems}>Mason Ellwood</h1>
                <InstagramIcon fontSize="large" color="primary" />
            </Toolbar>
        </div>
    );
};

export default withStyles(styles)(MenuList);
