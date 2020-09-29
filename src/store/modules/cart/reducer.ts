import { Reducer } from 'redux';

import produce from 'immer';
import { ICartState, ActionsTypes } from './types';

// Variável do valor inicial do estado
const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  // Colocando o produce fora do switch
  return produce(state, draft => {
    switch (action.type) {
      case ActionsTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        // Retorna o indice do produto, caso exista
        const productInCartIndex = state.items.findIndex(
          item => item.product.id === product.id,
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }

      // Action disparada pelo Saga (caso não tenha estoque)
      case ActionsTypes.addProductToCartFailure: {
        // Adicionando o id do produto que não tem no estoque
        draft.failedStockCheck.push(action.payload.productId);
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default cart;
