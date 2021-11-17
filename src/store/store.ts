import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { StateType } from "typesafe-actions";
import rootReducers from "./middlewares";

export type Store = StateType<typeof rootReducers>

export default function configureStore(preloadedState?: {} | undefined) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store: any = createStore(
    rootReducers,
    preloadedState,
    composedEnhancers
  );
  return { store };
}
