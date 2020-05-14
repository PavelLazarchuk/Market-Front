import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	img: {
		width: 350,
		height: 275,
		borderRadius: 5,
	},
	notimg: {
		width: 350,
		height: 275,
		borderRadius: 5,
		background: '#999999',
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-around',
	},
	flexitem: {
		paddingTop: 15,
		flexBasis: '40%',
	},
	deepFlex: {
		display: 'flex',
		marginBottom: 30,
		alignItems: 'center',
	},
	price: {
		fontSize: 24,
		marginRight: 50,
		color: theme.palette.color,
	},
	weight: {
		fontSize: 18,
		color: theme.palette.textColor,
	},
	description: {
		fontSize: 14,
		marginBottom: 20,
		color: theme.palette.textColor,
	},
	bold: {
		fontWeight: 'bold',
	},
	top: {
		marginTop: 25,
	},
}));

export default useStyles;
