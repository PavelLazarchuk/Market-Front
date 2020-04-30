import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Login from 'components/Login';
import Header from 'components/Header';
import LogOut from 'components/LogOut';
import Footer from 'components/Footer';
import Preloader from 'shared/Preloader';
import HomePage from 'components/Content';
import Register from 'components/Register';
import SetNewPass from 'components/setNewPass';
import ResetPass from 'components/Login/ResetPass';
import PrivateRoute from 'components/PrivateRouter';

const HrPage = lazy(() => import('../hr'));
const CandidatePage = lazy(() => import('../candidate'));
const CompanyPage = lazy(() => import('../company'));
const BlockedMsg = lazy(() => import('components/LogOut/BlockedUser'));

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.backgroundColor,
		position: 'relative',
		minHeight: '100vh',
	},
}));

export default function MainPage() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<Switch>
				<Suspense fallback={<Preloader />}>
					<Route exact path="/" component={HomePage} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/mailconfirm" component={ResetPass} />
					<Route path="/resetpass/:token" component={SetNewPass} />
					<Route path="/logout" component={LogOut} />
					<Route path="/blockeduser" component={BlockedMsg} />
					<PrivateRoute path="/hr" component={HrPage} />
					<PrivateRoute path="/company" component={CompanyPage} />
					<PrivateRoute path="/candidate" component={CandidatePage} />
				</Suspense>
			</Switch>
			<Footer />
		</div>
	);
}
