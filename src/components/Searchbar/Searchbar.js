// Dependencies
import React, { useState } from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

// Styles
import styles from './styles';

// Images
import searchImg from '../../assets/images/input-icon.png';

const Searchbar = (props) => {
    const { classes } = props;
    const history = useHistory();

    function handleChange(e) {
        console.log(e);
    }

    function onSubmit(e) {
        e.preventDefault();
        history.push('/home');
    }

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className={classes.inputContainer}>
                    <input className={classes.input} placeholder="Search Coin" type="text" onChange={handleChange} />
                    <img className={classes.searchImg} src={searchImg} alt="Search Icon" />
                </div>
            </form>
        </div>
    );
};

export default withStyles(styles)(Searchbar);
