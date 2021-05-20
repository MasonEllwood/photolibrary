import { useState, useEffect } from 'react';
import openWeather from '../apis/weather';

const useOpenWeather = (defaultSearchTerm) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm]);

    const search = async term => {
        const response = await openWeather.get('', {
            params: {
                zip: term
            }
        });

        setData(response.data);
    };
    
    return [data, search];
};

export default useOpenWeather;