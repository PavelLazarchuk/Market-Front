import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getOneProduct } from 'store/product/action';

const OneProduct = ({ product, getOneProduct }) => {
	const { id } = useParams();

	useEffect(() => {
		getOneProduct(id);
	}, [id, getOneProduct]);

	return <div></div>;
};

const mapStateToProps = ({ product }) => ({
	product: product.product,
});

export default connect(mapStateToProps, { getOneProduct })(OneProduct);
