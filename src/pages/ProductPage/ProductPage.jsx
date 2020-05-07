import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Subcategory from 'components/Product/Subcategory';
// import ProductByCategory from 'components/Product/ProductByCategory';

const ProductPage = () => (
	<>
		<Switch>
			<Route path="/product/category/:category" component={Subcategory} />
			{/* <Route path="/product/subcategory/:id" component={ProductByCategory} /> */}
		</Switch>
	</>
);

export default ProductPage;
