import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	err: {
		color: theme.palette.textcColor,
		fontSize: 24,
		textAlign: 'center',
	},
	flex: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		// justifyContent: 'space-around',
	},
	item: {
		width: 250,
		borderRadius: 6,
		position: 'relative',
		margin: '0 25px 25px 0',
		textDecoration: 'none',
		border: '1px solid #e3e3e2',
		background: theme.palette.cardColor,
		// [theme.breakpoints.down(900)]: {
		// 	flexBasis: '45%',
		// },
		// [theme.breakpoints.down(550)]: {
		// 	flexBasis: '95%',
		// },
	},
	img: {
		background: 'black',
		height: 200,
		width: '100%',
		borderRadius: 2,
	},
	content: {
		padding: '10px 15px',
	},
	caption: {
		fontSize: 22,
		color: theme.palette.color,
		marginBottom: 5,
	},
	company: {
		fontSize: 20,
		color: theme.palette.color,
		marginBottom: 5,
	},
	description: {
		fontSize: 16,
		color: theme.palette.textColor,
		marginBottom: 15,
	},
	footer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	price: {
		fontSize: 22,
		color: theme.palette.color,
	},
	weight: {
		fontSize: 16,
		marginRight: 5,
		color: theme.palette.textColor,
	},
}));

export default useStyles;
