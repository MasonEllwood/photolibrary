import axios from 'axios';

const KEY = 'b182c99605bca11944de3993c970e8f6';

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/forecast?',
    params: {
        appid: 'b182c99605bca11944de3993c970e8f6',
        units: 'imperial'
    }
});