import React from 'react';
import Container from '@material-ui/core/Container';

import AboutUs from 'components/Home/About';
import Slider from 'components/Home/Slider';
import Content from 'components/Home/Content';

const HomePage = () => (
	<div>
		<Content />
		<Container>
			<AboutUs />
			<Slider />
		</Container>
	</div>
);

export default HomePage;
