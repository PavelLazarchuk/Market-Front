import React from 'react';
import { connect } from 'react-redux';

import { addReview } from 'store/comment/actions';

const Form = ({ item, addReview }) => {
	return <div>{item._id}</div>;
};

const mstp = ({ product }) => ({
	item: product.product,
});

export default connect(mstp, { addReview })(Form);
