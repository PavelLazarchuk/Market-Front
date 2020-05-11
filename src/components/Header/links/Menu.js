import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import Links from './Links';
import useStyles from './styles';
import Button from 'shared/Button';
import { NAVBAR } from 'utils/constants/menuLinks';

const Menu = ({ open, setHidden }) => {
	const classes = useStyles();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
	return (
		<div className={classes.hidden}>
			<Button onClick={setHidden} className={classes.menu}>
				Menu
			</Button>
			<SwipeableDrawer
				anchor="right"
				open={open}
				onOpen={setHidden}
				onClose={setHidden}
				disableDiscovery={iOS}
				disableBackdropTransition={!iOS}
			>
				<Links className={classes.width} links={NAVBAR} click={setHidden} />
			</SwipeableDrawer>
		</div>
	);
};

export default compose(
	withState('open', 'setOpen', false),
	withHandlers({
		setHidden: ({ open, setOpen }) => () => setOpen(!open),
	}),
)(Menu);
