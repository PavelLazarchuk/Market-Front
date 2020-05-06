import React from 'react';
import { Slide } from 'react-slideshow-image';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import { img_list } from './img/list';

const Slider = () => {
	const classes = useStyles();
	const properties = {
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		indicators: true,
		arrows: true,
		pauseOnHover: true,
	};

	return (
		<Container>
			<div className={classes.slider}>
				<Slide {...properties}>
					{img_list.map((elem) => (
						<div key={elem} style={{ backgroundImage: `url(${elem})` }} className={classes.item} />
					))}
				</Slide>
			</div>
		</Container>
	);
};
//<img key={elem} url={elem} alt={`slide ${index}`} className={classes.item} />
export default Slider;
