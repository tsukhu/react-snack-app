import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga
} from './auth';

import { initBurgerIngredientsSaga } from './burgerBuilder';

import { initPizzaIngredientsSaga } from './pizzaBuilder';

import { purchaseBurgerSaga, fetchOrdersSaga } from './order';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
  ]);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_BURGER_INGREDIENTS, initBurgerIngredientsSaga);
}

export function* watchPizzaBuilder() {
  yield takeEvery(actionTypes.INIT_PIZZA_INGREDIENTS, initPizzaIngredientsSaga);
}

export function* watchOrder() {
  yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
  yield takeLatest(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}
