import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import App from './components/App';
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StyleSheetManager } from 'styled-components';
import './i18n';

const shouldForwardProp = prop =>
  !['currentSlide', 'slideCount'].includes(prop);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/car-rental-service">
          <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <App />
          </StyleSheetManager>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
