import React from 'react';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import UserCard from '../../components/UserCard/UserCard';
import { connect } from 'react-redux';

// Material UI
import { withStyles } from '@material-ui/core/styles';

import useCoinGeckoTrending from '../../hooks/useCoinGeckoTrending';

const SidebarRight = (props) => {
    const { classes } = props;
    useCoinGeckoTrending('search/trending');

    const trendingList = props.trending.coins.map((data, id) => {
        return (
            <div className={classes.trendingList} key={id}>
                <div className={classes.logoInfo}>
                    <div className={classes.logoBack}>
                        <img className={classes.logo} src={data.item.large} alt="trending Logo" />
                    </div>
                    <p className={classes.symbole}>${data.item.symbol}</p>
                </div>
                <div className={classes.pricingInfo}>
                    <p className={classes.pricingInfoName}>{data.item.name}</p>
                    <p className={classes.pricingInfoContent}>
                        Market Price: ${(data.item.price_btc / 0.00002771658571575865).toFixed(2)}
                    </p>
                    <p className={classes.pricingInfoContent}>Rank: #{data.item.market_cap_rank}</p>
                </div>
            </div>
        );
    });

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
            <h2 className={classes.trending}>Trending:</h2>
            {trendingList}
        </Drawer>
    );
};

// all props
// const mapStateToProps = (store) => ({whatever: store});
// only trending
const mapStateToProps = (store) => ({ trending: store.trending });

export default connect(mapStateToProps)(withStyles(styles)(SidebarRight));
