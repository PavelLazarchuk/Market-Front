import { ERROR } from 'utils/actions/errorAxios';
import { SUCCESS_CATEGORY, SUCCESS_SUBCATEGORY } from './types';

let initialValue = {
	category: [],
	subcategory: [],
	error: null,
	isError: false,
};

export default (state = initialValue, action) => {
	switch (action.type) {
		case SUCCESS_CATEGORY:
			return {
				...state,
				isError: false,
				category: action.payload,
			};

		case SUCCESS_SUBCATEGORY:
			return {
				...state,
				isError: false,
				subcategory: action.payload,
			};

		case ERROR:
			return {
				...state,
				isError: true,
				error: action.payload,
			};

		default:
			return state;
	}
};
