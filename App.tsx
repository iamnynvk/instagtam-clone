import React from "react";
import { LogBox } from "react-native";
import Routes from "./src/Routers";
import { Provider } from "react-redux";
import { persistor, store } from "./src/Store/ConfigureStore";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as PaperProvider } from "react-native-paper";

LogBox.ignoreLogs([
  "FlashList's rendered size is not usable. Either the height or width is too small (<2px). Please make sure that the parent view of the list has a valid size. FlashList will match the size of the parent.",
]);

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
