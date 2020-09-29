import { all } from 'redux-saga/effects';

// Importação de todos os Sagas
import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([cart]);
}
