import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import SubcategoryList from './SubcategoryList';
import { getCategoryId } from 'utils/constants/menuLinks';
import { getSubcategory } from 'store/admin/subcategoryAction';

const Subcategory = ({ list, getSubcategory }) => {
	const { category } = useParams();

	useEffect(() => {
		const id = getCategoryId(category);
		getSubcategory(`categoryId=${id}`);
	}, [category, getSubcategory]);

	return <SubcategoryList list={list} title={category} />;
};

const mapStateToProps = ({ admin }) => ({
	list: admin.subcategory,
});

export default connect(mapStateToProps, { getSubcategory })(Subcategory);
