import react, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setTrending } from '../redux/actions/trending';

const useCoinGeckoTrending = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function apiRoute() {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/${props}`);
                dispatch(setTrending(response.data));
            } catch (err) {
                console.error(err);
            }
        }
        apiRoute();
    }, []);
};

export default useCoinGeckoTrending;
