import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	link: {
		fontSize: 16,
		marginRight: 10,
		fontWeight: 'bold',
		padding: '5px 10px',
		transition: 'all 0.4s',
		textDecoration: 'none',
		color: theme.palette.color,
		fontFamily: theme.palette.font,
		borderBottom: '1px solid transparent',
		fontStyle: 'italic',
		'&:hover': {
			color: '#26a69a',
			transition: 'all 0.3s',
			borderBottom: '1px solid #26a69a',
		},
		'&:last-child': {
			marginRight: 0,
		},
		[theme.breakpoints.down(820)]: {
			fontSize: 14,
		},
		[theme.breakpoints.down(700)]: {
			fontSize: 20,
			marginRight: 0,
			borderRadius: 0,
			padding: '15px 0 10px 20px',
			borderBottom: '1px solid #3D3B69',
			backgroundColor: theme.palette.backgroundColor,
		},
	},
	hidden: {
		[theme.breakpoints.up(700)]: {
			display: 'none',
		},
	},
	absolute: {
		position: 'absolute',
		top: 33,
		right: 0,
	},
	width: {
		width: 300,
	},
	menu: {
		color: theme.palette.color,
		border: `1px solid ${theme.palette.color}`,
	},

	search: {
		padding: 20,
		borderRadius: 6,
		color: theme.palette.color,
		background: '#ebedf0',
		border: 0,
	},
}));

export default useStyles;
