import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';
import * as actions from '../actions';

export function* initSnackIngredientsSaga(action) {
    const response = yield axios.get(
      'https://react-demo-255ee.firebaseio.com/ingredients/'+action.snackType+'.json'
    );
    try {
      yield put(actions.setSnackIngredients(action.snackType,response.data));
    } catch (error) {
      yield put(actions.fetchSnackIngredientsFailed(action.snackType));
    }
}
