import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { history } from './redux/config';

import Snackbar from './components/Snackbar';
// import Searchbar     from './components/Searchbar';
import Main from './containers/Main';
import ZipCodeMain from './containers/ZipCodeMain';

const _Router = (props) => {
    return (
        <React.Fragment>
            <Snackbar />
            {/* <Searchbar /> */}
            <Router history={history}>
                <Switch>
                    <Route path="/home" component={ZipCodeMain} />
                    <Route path="/" component={Main} />
                </Switch>
            </Router>
        </React.Fragment>
    );
};

export default _Router;
