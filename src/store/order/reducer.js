import { ADD_PRODUCT } from './types';

const initialState = {
	order: null,
	orderList: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				orderList: [...state.orderList, action.payload],
			};
		default:
			return state;
	}
};
