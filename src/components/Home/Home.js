import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import { YAxis, XAxis, XYPlot, LineSeries, HorizontalGridLines, VerticalGridLines } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

const Home = (props) => {
    const { classes } = props;
    const [bitcoin, setBitcoin] = useState({
        value: [],
        data: '',
        valid: true,
    });

    useEffect(() => {
        async function apiRoute() {
            try {
                const response = await axios.get(
                    'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true'
                );
                if (response) {
                    let coinList = [];
                    response.data.market_data.sparkline_7d.price.forEach((item, n) => {
                        coinList.push({
                            x: n,
                            y: item,
                        });
                    });
                    setBitcoin({ value: coinList, data: response });
                }
            } catch (err) {
                setBitcoin({ valid: false });
                console.error(err);
            }
        }
        apiRoute();
    }, []);

    console.log(bitcoin);

    return (
        <div className={classes.home}>
            <div>
                <XYPlot height={600} width={600}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <LineSeries data={bitcoin.value} />
                </XYPlot>
            </div>
            <div>
                {/* <h1>{bitcoin.data.name}</h1> */}
                {/* <Typography paragraph>{bitcoin.data.description}</Typography> */}
            </div>
        </div>
    );
};

export default withStyles(styles)(Home);
