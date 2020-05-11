import React from 'react';

import Link from 'shared/Link';
import useStyles from './styles';

const Links = ({ className, links, click }) => {
	const classes = useStyles();
	return links.map((e) => (
		<Link key={e.to} to={e.to} onClick={click} className={`${classes.link} ${className}`}>
			{e.text}
		</Link>
	));
};

export default Links;
