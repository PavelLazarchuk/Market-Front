// import { CHANGE_TO_DARK, CHANGE_TO_LIGHT } from './types';

const initialState = {
	product: null,
	productList: [],
	addProduct: null,
	error: null,
	isError: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_TO_DARK':
			return {
				...state,
				product: 'dark',
			};
		case 'CHANGE_TO_LIGHT':
			return {
				...state,
				product: 'light',
			};
		default:
			return state;
	}
};
