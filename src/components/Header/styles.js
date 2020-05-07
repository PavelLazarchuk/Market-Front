import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: 'rgba(132, 133, 135, 0.2)',
		color: theme.palette.color,
		boxShadow: 'none',
		padding: '5px 0',
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		// padding: 'none',
		alignItems: 'center',
	},
	themeIcon: {
		width: '50px',
		height: '50px',
	},
	logo: {
		height: 60,
	},
	lgMenu: {
		[theme.breakpoints.down(700)]: {
			display: 'none',
		},
	},
	menuFlex: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	cart: {
		marginRight: 5,
		position: 'relative',
		color: theme.palette.color,
	},
	search: {
		marginBottom: 10,
		padding: '5px 20px',
		borderRadius: 6,
		color: theme.palette.color,
		background: '#ebedf0',
		border: 0,
		[theme.breakpoints.down(700)]: {
			marginBottom: 0,
		},
		[theme.breakpoints.down(500)]: {
			padding: '5px',
			width: 100,
		},
	},
}));

export default useStyles;
