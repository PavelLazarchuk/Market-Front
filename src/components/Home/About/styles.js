import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	about: {
		padding: '40px 0',
		display: 'flex',
		justifyContent: 'space-around',
	},
	aboutItem: {
		padding: '0 10px',
		flexBasis: '30%',
		textAlign: 'center',
	},
	title: {
		fontSize: 30,
		marginBottom: 10,
		fontWeight: 'bold',
		color: theme.palette.color,
	},
	key: {
		fontSize: 20,
		marginBottom: 2,
		fontStyle: 'italic',
		color: theme.palette.color,
	},
	value: {
		marginBottom: 8,
		paddingBottom: 3,
		color: theme.palette.textColor,
		borderBottom: `1px solid ${theme.palette.textColor}`,
	},
}));

export default useStyles;
