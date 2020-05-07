import { SUCCESS_SUBCATEGORY } from './types';
import { GET } from 'utils/constants/method';
import actionFactory from 'utils/actions/actionFactory';
import actionApiFactory from 'utils/actions/actionWithApiFactory';

const getAll = actionFactory(SUCCESS_SUBCATEGORY);

export const getSubcategory = actionApiFactory('subCategories?', GET, getAll);
