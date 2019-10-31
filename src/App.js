import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./Redux/store";

import Sample from "./Components/Sample/Sample.component";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Sample />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
