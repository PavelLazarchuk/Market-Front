import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';

import Cart from './Cart';
import Menu from './links/Menu';
import useStyles from './styles';
import Links from './links/Links';
import dark from './img/dark.png';
import logo from './img/LOGO.png';
import light from './img/light.png';
import { NAVBAR } from 'utils/constants/menuLinks';
import { changeToDark, changeToLight } from 'store/theme/themeActions';

const Header = ({ thema, changeToLight, changeToDark }) => {
	const classes = useStyles();
	const darkTheme = () => {
		changeToDark();
		localStorage.setItem('theme', 'dark');
	};
	const lightTheme = () => {
		changeToLight();
		localStorage.setItem('theme', 'light');
	};

	return (
		<AppBar position="static" className={classes.root}>
			<Container className={classes.flex}>
				<img className={classes.logo} src={logo} alt="pic" />
				<div className={classes.menuFlex}>
					<input placeholder="Search..." className={classes.search} />
					<div className={classes.lgMenu}>
						<Links links={NAVBAR} />
					</div>
				</div>
				<Box component="div" className={classes.flex}>
					<IconButton onClick={() => (thema === 'light' ? darkTheme() : lightTheme())}>
						<img src={thema === 'light' ? dark : light} className={classes.themeIcon} alt="pic" />
					</IconButton>
					<Cart classes={classes} />
					<Menu />
				</Box>
			</Container>
		</AppBar>
	);
};

const mapStateToProps = ({ theme }) => ({
	thema: theme.theme,
});

export default connect(mapStateToProps, { changeToLight, changeToDark })(Header);
