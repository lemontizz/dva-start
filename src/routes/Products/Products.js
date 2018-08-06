import React from 'react';
import {
	connect
} from 'dva';
import ProductList from '../../components/ProductList/ProductList';
import Layout from '../../components/Layout/Layout';
import { NavLink, Link } from 'react-router-dom';

const Products = ({
	dispatch,
	products
}) => {
	function handleDelete(id) {
		dispatch({
			type: 'products/delete',
			payload: id,
		});
	}

	return (
		<div>
			<h2>List of Products</h2>
			<Link to="/Register" className="text-link">register</Link>
			<ProductList onDelete={handleDelete} products={products} />
		</div>
	)
};

export default connect(({
	products
}) => ({
	products,
}))(Products);