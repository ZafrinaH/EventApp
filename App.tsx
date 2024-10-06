import { Provider } from 'react-redux';

import Routes from './src/navigation';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}