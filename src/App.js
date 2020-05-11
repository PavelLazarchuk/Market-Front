import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import Preloader from 'shared/Preloader';
import { LIGHT, DARK } from 'utils/constants/theme';
const MainPage = lazy(() => import('./pages/MainPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const ReduxToastr = lazy(() => import('./shared/ReduxToastr'));

const App = ({ theme }) => {
	const type = theme === 'light' ? LIGHT : DARK;
	return (
		<ThemeProvider theme={type}>
			<Suspense fallback={<Preloader />}>
				<Switch>
					<Route path="/admin" component={AdminPage} />
					<Route path="/" component={MainPage} />
				</Switch>
				<ReduxToastr />
			</Suspense>
		</ThemeProvider>
	);
};

const mapStateToProps = ({ theme }) => ({
	theme: theme.theme,
});

export default connect(mapStateToProps)(App);
