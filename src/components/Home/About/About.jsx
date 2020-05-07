import React from 'react';
import Container from '@material-ui/core/Container';

import useStyles from './styles';

const AboutUse = () => {
	const classes = useStyles();
	return (
		<Container>
			<div className={classes.about}>
				<div className={classes.aboutItem}>
					<div className={classes.title}>Контактна інформація</div>
					<div className={classes.key}>Телефон</div>
					<div className={classes.value}>+38(067)123-45-67</div>
					<div className={classes.value}>+38(098)123-45-67</div>
					<div className={classes.value}>+38(053)123-45-67</div>
					<div className={classes.key}>Пошта</div>
					<div className={classes.value}>market@gmail.com</div>
					<div className={classes.key}>Facebook</div>
					<div className={classes.value}>facebook.com/market</div>
					<div className={classes.key}>Instagram</div>
					<div className={classes.value}>instagram.com/market_295</div>
				</div>
				<div className={classes.aboutItem}>
					<div className={classes.title}>Наші адреси:</div>
					<div className={classes.key}>Київ</div>
					<div className={classes.value}>вул.Володимирська 1</div>
					<div className={classes.key}>Харків</div>
					<div className={classes.value}>вул.Київська 14</div>
					<div className={classes.key}>Львів</div>
					<div className={classes.value}>вул.Тараса Шевченка 7</div>
					<div className={classes.key}>Графік роботи</div>
					<div className={classes.value}>с 9:00 до 21:00</div>
				</div>
			</div>
		</Container>
	);
};

export default AboutUse;
