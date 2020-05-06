import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store';
import onStart from 'utils/onStart';
import * as serviceWorker from './serviceWorker';

onStart(localStorage);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

serviceWorker.register();
