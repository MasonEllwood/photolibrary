// Dependencies
import React, { useState } from 'react';
import { connect }          from 'react-redux';

// Redux
import { useDispatch } from 'react-redux';
import { setSnackbar } from '../../redux/actions/snackbar';
import { setZip } from '../../redux/actions/zip';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

// Images
import chevronLeft from '../../assets/images/chevron-left.svg';
import sunnyLogo from '../../assets/images/sunnyLogo.png';
import partlyCloudy from '../../assets/images/partlyCloudy.png';
import rain from '../../assets/images/rain.svg';
import wind from '../../assets/images/wind.svg';
import humid from '../../assets/images/humid.svg';

// API
import OpenWeather from '../../apis/weather';
import useOpenWeather from '../../hooks/useOpenWeather';

// Styles
import styles from './styles';

const ZipCodeMain = ({classes, zip}) => {
    const [ziplocal, setZipLocal] = useState(zip);
    
    const openWeatherData = useOpenWeather(zip);
    const cityName = openWeatherData?.[0]?.city?.name;
    const country = openWeatherData?.[0]?.city?.country;
    const dayArray = openWeatherData?.[0]?.list;
    const currentDay = openWeatherData?.[0]?.list?.[0]?.dt_txt;
    console.log(dayArray);
    const history = useHistory();
    
    function renderList() {
        return dayArray.map((day) => {
            return (
                <div className={classes.weatherInfoCard} key={day.dt}>
                    <div className={classes.cardRow}>
                        <div className={classes.cardColumn}>
                            <p>{day.dt_txt}</p>
                            <div className={classes.innerCardRow}>
                                <div className={classes.innerCardColumn}>
                                    <img className={classes.sunnyLogo} src={sunnyLogo} alt="Sunny Logo"/>
                                </div>
                                <div className={classes.innerCardColumn}>
                                    <p className={classes.innerCardColumnWeather}>{day.weather[0].main}</p>
                                    <h5 className={classes.innerCardColumnTemp}>{Math.floor(day.main.temp)}</h5>
                                </div>
                            </div>
                            <div className={classes.statsCardRow}>
                                <img className={classes.weatherIcon} src={rain} alt="Rain"/>
                                <p>Pressure: <b>{day.main.pressure}</b></p>
                            </div>
                            <div className={classes.statsCardRow}>
                                <img className={classes.weatherIcon} src={wind} alt="Wind"/>
                                <p>Humidity: <b>{day.main.humidity}%</b></p>
                            </div>
                            <div className={classes.statsCardRow}>
                                <img className={classes.weatherIcon} src={humid} alt="Humid"/>
                                <p>Wind: <b>{day.wind.speed}</b></p>
                            </div>
                        </div>
                        <div className={classes.cardColumn}>
                            <p>Feels Like</p>
                            <div className={classes.innerCardRow}>
                                <div className={classes.innerCardColumn}>
                                    <img className={classes.partlyCloudy} src={partlyCloudy} alt="Partly Cloudy"/>
                                </div>
                                <div className={classes.innerCardColumn}>
                                    <p className={classes.innerCardColumnWeather}>After Noon</p>
                                    <h5 className={classes.innerCardColumnTemp}>{Math.floor(day.main.feels_like)}</h5>
                                </div>
                            </div>
                            <div className={classes.statsCardRow}>
                                <img className={classes.weatherIcon} src={rain} alt="Rain"/>
                                <p>Min Temp: <b>{Math.floor(day.main.temp_min)}</b></p>
                            </div>
                            <div className={classes.statsCardRow}>
                                <img className={classes.weatherIcon} src={wind} alt="Wind"/>
                                <p>Grnd Level: <b>{day.main.grnd_level}</b></p>
                            </div>
                            <div className={classes.statsCardRow}>
                                <img className={classes.weatherIcon} src={humid} alt="Humid"/>
                                <p>Gust: <b>{day.wind.gust}</b></p>
                            </div>
                        </div>
                    </div>    
                </div>
            );
        });
    };

    return (
        <div className={classes.root}>
            <button className={classes.backButton} onClick={() => history.push('/')}><img className={classes.chevronLeft} src={chevronLeft} alt="Chevron Left"/> Go back</button>    
            <div className={classes.body}>
                <div className={classes.sideBar}>
                    <h2 className={classes.location}>{cityName}, <br/>{country}</h2>
                </div>
                <div className={classes.infoMain}>
                    <h3 className={classes.date}>{currentDay}</h3>
                    {dayArray != null ? renderList(): ''}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = function(store) {
    const props = { zip: store.zip };
    return props;
}

export default connect(mapStateToProps, { setZip })(withStyles(styles)(ZipCodeMain));