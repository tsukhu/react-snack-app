import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';
import * as actions from '../actions';

export function* initPizzaIngredientsSaga(action) {
  const response = yield axios.get(
    'https://react-demo-255ee.firebaseio.com/ingredients/pizza.json'
  );
  try {
    yield put(actions.setPizzaIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchPizzaIngredientsFailed());
  }
}
