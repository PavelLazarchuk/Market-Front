import React from 'react';
import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';

import Link from 'shared/Link';

const SubcategoryItem = ({ _id, name, classes }) => (
	<Card className={classes.flexItem}>
		<Link to={`/product/subcategory/${_id}`} className={classes.link}>
			{name}
		</Link>
	</Card>
);

export default SubcategoryItem;
