import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Preloader from 'shared/Preloader';
const HomePage = lazy(() => import('../HomePage'));
const SellerPage = lazy(() => import('../SellerPage'));
const ProductPage = lazy(() => import('../ProductPage'));

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.backgroundColor,
		position: 'relative',
		minHeight: '100vh',
	},
}));

const MainPage = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<Switch>
				<Suspense fallback={<Preloader />}>
					<Route exact path="/" component={HomePage} />
					<Route path="/seller" component={SellerPage} />
					<Route path="/product" component={ProductPage} />
				</Suspense>
			</Switch>
			<Footer />
		</div>
	);
};

export default MainPage;
