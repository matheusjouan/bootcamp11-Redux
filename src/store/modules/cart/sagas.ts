import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {
  addProtuctToCartRequest,
  addProtuctToCartSuccess,
  addProtuctToCartFailure,
} from './actions';
import { IState } from '../..';

import api from '../../../services/api';
import { ActionsTypes } from './types';

interface IStockResponse {
  id: number;
  quantity: number;
}

// Forma de Tipar o parâmetro da action
type CheckProductStockRequest = ReturnType<typeof addProtuctToCartRequest>;

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  // select (lib redux-saga/effects): server p/ pegar informações do estado
  const currentQuantity: number = yield select((state: IState) => {
    // Procura se o produto que está sendo adicionado está no carrinho
    return (
      state.cart.items.find(item => item.product.id === product.id)?.quantity ??
      0
    );
  });

  // Tipagem do retorno da chamada API AxiosResponse<Interface do retorno>
  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`,
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    // put => dispara uma Action para o Reducer
    yield put(addProtuctToCartSuccess(product));
  } else {
    yield put(addProtuctToCartFailure(product.id));
  }
}

export default all([
  // 1º action (type) quero ouvir para utilizar o Saga (ação externa)
  // 2º parâmetro: qual função a ser executada assim que a action é disparada
  takeLatest(ActionsTypes.addProductToCartRequest, checkProductStock),
]);
