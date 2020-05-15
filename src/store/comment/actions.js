import { ADD_COMMENT } from './types';
import { POST } from 'utils/constants/method';
import actionFactory from 'utils/actions/actionFactory';
import actionApiFactory from 'utils/actions/actionWithApiFactory';

const addComment = actionFactory(ADD_COMMENT);

const addMsg = 'Коментар успішно створено';

export const addReview = actionApiFactory('reviews', POST, addComment, addMsg);
