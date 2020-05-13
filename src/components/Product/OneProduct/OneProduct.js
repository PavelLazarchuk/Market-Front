import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Information from './Information';
import Preloader from 'shared/Preloader';
import { getOneProduct } from 'store/product/action';

const OneProduct = ({ product, getOneProduct }) => {
	const { id } = useParams();

	useEffect(() => {
		getOneProduct(id);
	}, [id, getOneProduct]);

	return product ? <Information data={product} /> : <Preloader size={true} />;
};

const mapStateToProps = ({ product }) => ({
	product: product.product,
});

export default connect(mapStateToProps, { getOneProduct })(OneProduct);
