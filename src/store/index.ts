import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { ICartState } from './modules/cart/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import { IUser } from './modules/user/types';

export interface IState {
  cart: ICartState;
  users: IUser;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  ),
);

sagaMiddleware.run(rootSaga);

export default store;