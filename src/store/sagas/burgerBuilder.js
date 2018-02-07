import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';
import * as actions from '../actions';

export function* initIngredientsSaga(action) {
  const response = yield axios.get(
    'https://react-demo-255ee.firebaseio.com/ingredients.json'
  );
  try {
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
