import { ADD_PRODUCT } from './types';
import actionFactory from 'utils/actions/actionFactory';

const addProduct = actionFactory(ADD_PRODUCT);

export const addToOrder = (data) => (dispatch) => dispatch(addProduct(data));
