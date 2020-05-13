import React from 'react';

import PageWrap from 'shared/PageWrap';

const Information = ({ data }) => (
	<PageWrap title={data.name}>
		<div>{data.currentPrice}</div>
	</PageWrap>
);

export default Information;
