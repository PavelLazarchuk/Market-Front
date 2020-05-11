import React from 'react';
import Container from '@material-ui/core/Container';

import Text from 'shared/Text';
import useStyles from './styles';

export default function Footer() {
	const classes = useStyles();

	return (
		<>
			<div className={classes.fixHeiht}></div>
			<footer className={classes.root}>
				<Container>
					<Text className={classes.center}>All Rights Reserved &#169; 2020 Market.com, Inc.</Text>
				</Container>
			</footer>
		</>
	);
}
