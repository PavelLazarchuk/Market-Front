import React from 'react';

import Text from 'shared/Text';
import useStyles from './styles';
import bgp3 from './img/Group 433.png';
import bgp4 from './img/Group 431.png';

const Content = () => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.banner}>
				<div className={classes.bannerCont}>
					<Text className={classes.bannerText}>Lorem ipsum dolor sit</Text>
					<Text className={classes.bannerText}>Duis aute irure dolor in reprehenderit</Text>
				</div>
			</div>
			<img src={bgp3} className={`${classes.bg1} ${classes.bg}`} alt="bg1" />
			<img src={bgp4} className={`${classes.bg2} ${classes.bg}`} alt="bg2" />
		</>
	);
};

export default Content;
