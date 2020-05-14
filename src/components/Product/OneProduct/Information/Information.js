import React from 'react';

import Text from 'shared/Text';
import useStyles from './styles';
import PageWrap from 'shared/PageWrap';
import AddToOrder from 'components/Order/AddToOrder';

const Information = ({
	data,
	name,
	image,
	company,
	category,
	description,
	subCategory,
	currentPrice,
}) => {
	const classes = useStyles();

	return (
		<PageWrap title={name}>
			<div className={classes.flex}>
				{image ? (
					<img src={image} alt="product" className={classes.img} />
				) : (
					<div className={classes.notimg}>This is image</div>
				)}
				<div className={classes.flexitem}>
					<div className={classes.deepFlex}>
						<Text className={classes.price}>{currentPrice} &#8372;</Text>
						<Text className={classes.weight}>for 1 kg</Text>
					</div>
					<AddToOrder data={data} />
					<Text className={`${classes.description} ${classes.top}`}>{description}</Text>
					<Text className={classes.description}>Category - {`${category} (${subCategory})`}</Text>
					<Text className={`${classes.weight} ${classes.bold}`}>Provider: {company}</Text>
				</div>
			</div>
		</PageWrap>
	);
};

export default Information;
