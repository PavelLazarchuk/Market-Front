// import { CHANGE_TO_DARK, CHANGE_TO_LIGHT } from './types';

const initialState = {
	order: null,
	orderList: [],
	addOrder: null,
	error: null,
	isError: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_TO_DARK':
			return {
				...state,
				order: 'dark',
			};
		case 'CHANGE_TO_LIGHT':
			return {
				...state,
				order: 'light',
			};
		default:
			return state;
	}
};
