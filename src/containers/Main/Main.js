// Dependencies
import React from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Styles
import styles from './styles';

// Images
import logo from '../../assets/images/logowhite.png';

import { useHistory } from 'react-router';

const Main = (props) => {
    const { classes } = props;

    const history = useHistory();

    return (
        <div className={classes.root}>
            <img className={classes.logo} src={logo} alt="Fyresite Logo" />
            <Button
                className={classes.button}
                onClick={() => {
                    history.push('/home');
                }}
                variant="contained"
                size="large">
                HOPE YOU'RE SOBER SIR
            </Button>
        </div>
    );
};

export default withStyles(styles)(Main);
