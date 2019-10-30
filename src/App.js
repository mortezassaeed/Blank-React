import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Sample from "./Components/Sample/Sample.component";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Sample />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
