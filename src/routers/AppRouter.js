import React from 'react';//relative path
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import PageNotFound from '../components/PageNotFound';
// import Edit from '../components/EditExpensePage';
// import Help from '../components/HelpPage';
// import AddExpensePage from '../components/AddExpensePage'
// import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
// import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NewsPage from '../components/NewsPage'


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={NewsPage} exact={true}/>        
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
