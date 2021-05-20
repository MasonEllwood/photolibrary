// Dependencies
import React from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

// Styles
import styles from './styles';

// Images
import logo from '../../assets/images/pancakeswap-cake-logo.png';

import { useHistory } from 'react-router';

// Components
import Searchbar from '../../components/Searchbar/Searchbar.js';

const Main = (props) => {
    const { classes } = props;

    const history = useHistory();

    return (
        <div className={classes.root}>
            <img className={classes.logo} src={logo} alt="Fyresite Logo" />
            <h2 className={classes.header}>Krunkto</h2>
            <p className={classes.subText}>Come on in, the water is fine.</p>
            {/* <Searchbar /> */}
            <Button
                onClick={() => {
                    history.push('/home');
                }}
                variant="contained"
                size="large">
                Hope you're sober sir
            </Button>
        </div>
    );
};

export default withStyles(styles)(Main);
