import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';
import * as actions from '../actions';

export function* initBurgerIngredientsSaga(action) {
  const response = yield axios.get(
    'https://react-demo-255ee.firebaseio.com/ingredients/burger.json'
  );
  try {
    yield put(actions.setBurgerIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchBurgerIngredientsFailed());
  }
}
