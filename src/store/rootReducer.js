import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import authReducer from './auth/reducer';
import themeReducer from './theme/reducer';
import adminReducer from './admin/reducer';
import commentReducer from './comment/reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	admin: adminReducer,
	theme: themeReducer,
	toastr: toastrReducer,
	comment: commentReducer,
});

export default rootReducer;
