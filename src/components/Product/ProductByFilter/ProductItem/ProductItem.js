import React from 'react';
import RoomIcon from '@material-ui/icons/Room';

import Text from 'shared/Text';
import Link from 'shared/Link';
import AddToOrder from 'components/Order/AddToOrder';

const ProductItem = ({ _id, image, name, company, currentPrice, description, classes, data }) => (
	<Link to={`/product/item/${_id}`} className={classes.item}>
		{image ? (
			<img src={image} alt="prod" className={classes.img} />
		) : (
			<div className={classes.notimg}>This is image</div>
		)}
		<div className={classes.content}>
			<Text className={classes.caption}>{name}</Text>
			<Text className={classes.company}>
				<RoomIcon />
				{company}
			</Text>
			<Text className={classes.description}>{description}</Text>
			<div className={classes.footer}>
				<Text className={classes.weight}>1 kg</Text>
				<Text className={classes.price}>{currentPrice} &#8372;</Text>
			</div>
		</div>
		<AddToOrder absolute={true} data={data} />
	</Link>
);

export default ProductItem;
