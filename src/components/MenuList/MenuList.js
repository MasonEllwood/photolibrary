import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import styles from './styles';
import Searchbar from '../Searchbar';

// import { useHistory } from 'react-router';

const MenuList = (props) => {
    const { classes } = props;
    // const history = useHistory();

    return (
        <div className={classes.menuList}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.menuItems}>
                    <Button
                        className={classes.menuItems}
                        variant="p"
                        onClick={() => {
                            props.menuChange('home');
                        }}>
                        Home
                    </Button>
                    <Button
                        className={classes.menuItems}
                        variant="p"
                        onClick={() => {
                            props.menuChange('profile');
                        }}>
                        Profile
                    </Button>
                    <Button
                        className={classes.menuItems}
                        variant="p"
                        onClick={() => {
                            props.menuChange('profit-loss');
                        }}>
                        Profit/Loss
                    </Button>
                    <Button
                        className={classes.menuItems}
                        variant="p"
                        onClick={() => {
                            props.menuChange('transactions');
                        }}>
                        Transactions
                    </Button>
                    <Button
                        className={classes.menuItems}
                        variant="p"
                        onClick={() => {
                            props.menuChange('alert');
                        }}>
                        Alert
                    </Button>
                    <Button
                        className={classes.menuItems}
                        variant="p"
                        onClick={() => {
                            props.menuChange('news');
                        }}>
                        News
                    </Button>
                </div>
                <Searchbar />
            </Toolbar>
        </div>
    );
};

export default withStyles(styles)(MenuList);
