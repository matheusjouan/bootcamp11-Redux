import { IProduct, ActionsTypes } from './types';

// Requisição da Ação
export function addProtuctToCartRequest(product: IProduct) {
  return {
    type: ActionsTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

// Se a Requisição der Sucesso (verificado no Saga) dispara esta função
export function addProtuctToCartSuccess(product: IProduct) {
  return {
    type: ActionsTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

// Se a Requisição der Falha (verificado no Saga) dispara esta função
export function addProtuctToCartFailure(productId: number) {
  return {
    type: ActionsTypes.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}
