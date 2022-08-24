import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./userReducer";
import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import promiseMiddleware from "redux-promise";

const persistConfig = {
  key: "root",
  storage: storage,
};

const logger = createLogger();

const rootReducer = combineReducers({
  userReducer,
});
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

const store = createStoreWithMiddleware(
  persistReducer(persistConfig, rootReducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
