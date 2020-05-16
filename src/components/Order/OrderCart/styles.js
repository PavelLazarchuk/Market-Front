import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	err: {
		fontSize: 24,
		textAlign: 'center',
		color: theme.palette.textColor,
	},
	flex: {
		display: 'flex',
		flexDirection: 'column',
	},

	item: {
		padding: '10px',
		marginBottom: 10,
		borderTop: `1px solid ${theme.palette.textColor}`,
	},

	itemElem: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},

	key: {
		fontSize: 20,
		marginRight: 10,
		color: theme.palette.color,
	},

	value: {
		fontSize: 18,
		color: theme.palette.textColor,
	},

	total: {
		fontSize: 24,
		textAlign: 'right',
		margin: '10px 20px 0 0',
		color: theme.palette.color,
	},
}));

export default useStyles;
