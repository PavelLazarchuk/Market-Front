import React, { useState } from 'react';
import { withState } from 'recompose';
import Drawer from '@material-ui/core/Drawer';

import Links from './Links';
import useStyles from './styles';
import Button from 'shared/Button';
import { NAVBAR } from 'utils/constants/menuLinks';

const Menu = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	return (
		<div className={classes.hidden}>
			<Button onClick={() => setOpen(true)} className={classes.menu}>
				Menu
			</Button>
			<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
				<Links className={classes.width} links={NAVBAR} click={() => setOpen(false)} />
			</Drawer>
		</div>
	);
};

export default withState('counter', 'setCounter', false)(Menu);
