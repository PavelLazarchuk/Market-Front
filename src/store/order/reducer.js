import { ADD_PRODUCT, CLEAN_ORDER, CHANGE_ORDER } from './types';

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

		case CLEAN_ORDER:
			return {
				...state,
				orderList: [],
			};

		case CHANGE_ORDER:
			return {
				...state,
				orderList: action.payload,
			};

		default:
			return state;
	}
};
