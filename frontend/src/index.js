import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import store from './Redux/store'
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StrictMode>
      <Provider store={store}>
      <ColorModeScript />
      <App />
  </Provider>
    </StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();

reportWebVitals();
