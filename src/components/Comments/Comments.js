import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageWrap from 'shared/PageWrap';
import ProductComments from './CompanyComments/Comments';
import AdminComments from './CandidateComments/Comments';

const Comment = () => (
	<PageWrap text="Комментарі">
		<Switch>
			<Route path="/product/comment" component={ProductComments} />
			<Route path="/admin/comment" component={AdminComments} />
		</Switch>
	</PageWrap>
);

export default Comment;
