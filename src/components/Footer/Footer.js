import React from 'react';
import Container from '@material-ui/core/Container';

import useStyles from './styles';

export default function Footer() {
	const classes = useStyles();

	return (
		<>
			<div className={classes.fixHeiht}></div>
			<footer className={classes.root}>
				<Container>
					<div className={classes.center}>All Rights Reserved &#169; 2020 Market.com, Inc.</div>
				</Container>
			</footer>
		</>
	);
}
