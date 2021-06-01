// Dependencies
import React, { useState } from 'react';
import { connect } from 'react-redux';

// Redux
import { useDispatch } from 'react-redux';
import { setZip } from '../../redux/actions/zip';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

// Styles
import styles from './styles';

// Images
import searchImg from '../../assets/images/input-icon.png';

const Searchbar = ({ classes, zip, setZip }) => {
    const [ziplocal, setZipLocal] = useState(zip);
    const history = useHistory();

    function handleChange(e) {
        setZipLocal(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        setZip(ziplocal);
        history.push('/home');
    }

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className={classes.inputContainer}>
                    <input
                        className={classes.input}
                        placeholder="Enter Zipcode"
                        type="text"
                        onChange={handleChange}
                        maxLength="5"
                        value={ziplocal}
                    />
                    <img className={classes.searchImg} src={searchImg} alt="Search Icon" />
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = function (store) {
    const props = { zip: store.zip };
    return props;
};

export default connect(mapStateToProps, { setZip })(withStyles(styles)(Searchbar));
