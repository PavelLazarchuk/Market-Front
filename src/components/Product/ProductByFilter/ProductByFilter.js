import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductList from './ProductList';
import { getProductByFilter } from 'store/product/action';

const ProductByFilter = ({ title, productList, getProductByFilter }) => {
	const { id } = useParams();

	useEffect(() => {
		getProductByFilter(`subCategoryId=${id}`);
	}, [id, getProductByFilter]);

	return <ProductList list={productList} title={title} />;
};

const mapStateToProps = ({ product, admin }) => ({
	title: admin.subcategoryTitle,
	productList: product.productList,
});

export default connect(mapStateToProps, { getProductByFilter })(ProductByFilter);
