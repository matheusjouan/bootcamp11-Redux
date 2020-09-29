import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

// Importa a função para criação do SagaMiddleware
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';

import rootReducer from './modules/rootReducer';
import { ICartState } from './modules/cart/types';

// Formato do Estado Global
export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

// Array de Middleware, assim que tiver mais middlewares é adicionado nesse array
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

// Executa todos os Sagas da aplicação
sagaMiddleware.run(rootSaga);

export default store;
