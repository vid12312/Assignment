import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import createStore from './store/createStore';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={createStore}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);