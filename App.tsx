import React from 'react';
import Routes from './src/Routers';
import {Provider} from 'react-redux';
import {persistor, store} from './src/Store/ConfigureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
};

export default App;
