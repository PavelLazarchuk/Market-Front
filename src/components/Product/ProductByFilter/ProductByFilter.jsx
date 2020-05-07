import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductList from './ProductList';
import { getProductByFilter } from 'store/product/action';

const ProductByFilter = ({ productList, getProductByFilter }) => {
	const { id } = useParams();
	useEffect(() => {
		getProductByFilter(`subCategoryId=${id}`);
	}, [id]);

	return <ProductList list={productList} />;
};

const mapStateToProps = ({ product }) => ({
	productList: product.productList,
});

export default connect(mapStateToProps, { getProductByFilter })(ProductByFilter);
