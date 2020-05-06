import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	slider: {
		padding: '40px 0',
		width: '80%',
		margin: 'auto',
	},
	item: {
		height: 500,
		display: 'flex',
		alignItems: 'center',
		backgroundSize: 'cover',
		justifyContent: 'center',
	},
}));

export default useStyles;
