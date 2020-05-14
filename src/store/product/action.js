import { GET } from 'utils/constants/method';
import actionFactory from 'utils/actions/actionFactory';
import actionApiFactory from 'utils/actions/actionWithApiFactory';
import { GET_ONE_PRODUCT, GET_PRODUCT_LIST, CLEAN_PRODUCT, CLEAN_LIST } from './types';

const getProduct = actionFactory(GET_ONE_PRODUCT);
const getProducts = actionFactory(GET_PRODUCT_LIST);

export const getOneProduct = actionApiFactory('products/', GET, getProduct);
export const getProductByFilter = actionApiFactory('products?', GET, getProducts);
export const cleanProductList = () => (dispatch) => dispatch({ type: CLEAN_LIST });
export const cleanOneProduct = () => (dispatch) => dispatch({ type: CLEAN_PRODUCT });
