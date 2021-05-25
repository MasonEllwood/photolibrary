import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const TrendingSingle = (props) => {
    const { classes } = props;
    const [featured, setFeatured] = useState({ value: '', valid: true });

    useEffect(() => {
        async function apiRoute() {
            try {
                const userPaymentMethods = await axios.get('https://api.coingecko.com/api/v3/search/trending');
                setFeatured({ value: userPaymentMethods.data.coins[0].item });
            } catch (err) {
                console.error(err);
            }
        }
        apiRoute();
    }, []);

    console.log(featured);

    return (
        <div className={classes.drawerInfo}>
            <h2>Trending</h2>
            <div className={classes.alignHelper}>
                <div className={classes.personalInfo}>
                    <h3 className={classes.h3}>{featured.value.name}</h3>
                    <p className={classes.p}>${featured.value.symbol}</p>
                    <p className={classes.p}>Ranked: #{featured.value.market_cap_rank}</p>
                </div>
                <div className={classes.trendingLogo}>
                    <img className={classes.trendingLogo} src={featured.value.large} alt="Trending Logo" />
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(TrendingSingle);
