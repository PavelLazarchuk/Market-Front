import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	link: {
		padding: '5px 10px',
		marginRight: '10px',
		textDecoration: 'none',
		fontWeight: 'bold',
		fontSize: '16px',
		transition: 'all 0.4s',
		borderBottom: '1px solid transparent',
		color: theme.palette.color,
		fontFamily: theme.palette.font,
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
			fontSize: '14px',
		},
		[theme.breakpoints.down(670)]: {
			fontSize: 18,
			marginRight: 0,
			borderRadius: 0,
			padding: '10px 15px',
			backgroundColor: theme.palette.backgroundColor,
		},
	},
	hidden: {
		[theme.breakpoints.up(670)]: {
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
		padding: '5px',
		border: `1px solid ${theme.palette.color}`,
	},
}));

export default useStyles;
