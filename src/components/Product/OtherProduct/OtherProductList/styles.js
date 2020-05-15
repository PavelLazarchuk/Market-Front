import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '20px 0',
		[theme.breakpoints.down(740)]: {
			display: 'none',
		},
	},
	title: {
		fontSize: 18,
		color: theme.palette.color,
		marginBottom: 20,
	},
	flex: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	img: {
		width: 150,
		height: 100,
		margin: '0 10px 10px 0',
	},
	notimg: {
		width: 150,
		height: 100,
		background: '#999999',
		margin: '0 10px 10px 0',
	},
}));

export default useStyles;
