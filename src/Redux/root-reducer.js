import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import sampleReducer from "./sample/sample.reducer";
import samplePersistReducer from "./sample/samplePesist.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["samplePersist"]
};

const rootReducer = combineReducers({
  sample: sampleReducer,
  samplePersist: samplePersistReducer
});

export default persistReducer(persistConfig, rootReducer);
