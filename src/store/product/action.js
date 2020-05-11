import { GET } from 'utils/constants/method';
import actionFactory from 'utils/actions/actionFactory';
import { GET_ONE_PRODUCT, GET_PRODUCT_LIST } from './types';
import actionApiFactory from 'utils/actions/actionWithApiFactory';

const getProduct = actionFactory(GET_ONE_PRODUCT);
const getProducts = actionFactory(GET_PRODUCT_LIST);

export const getOneProduct = actionApiFactory('products/', GET, getProduct);
export const getProductByFilter = actionApiFactory('products?', GET, getProducts);
