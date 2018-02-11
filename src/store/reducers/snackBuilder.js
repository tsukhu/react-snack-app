import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  totalPrice: 4,
  ingredients: null,
  error: false,
  building: false,
  snackType: 'burger'
};

const BURGER_INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const PIZZA_INGREDIENT_PRICES = {
  paprika: 0.5,
  pepperoni: 1.4,
  onion: 0.3,
  olive: 0.7
};

const addSnackIngredient = (state, action) => {
  if (action.snackType === 'pizza' && state.ingredients[action.ingredientName] === 1)
    return state;
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice:
      state.totalPrice +
      (action.snackType === 'burger'
        ? BURGER_INGREDIENT_PRICES[action.ingredientName]
        : PIZZA_INGREDIENT_PRICES[action.ingredientName]),
    building: true
  };
  return updateObject(state, updatedState);
};

const removeSnackIngredient = (state, action) => {
  const updatedIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
  };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice:
      state.totalPrice -
      (action.snackType === 'burger'
        ? BURGER_INGREDIENT_PRICES[action.ingredientName]
        : PIZZA_INGREDIENT_PRICES[action.ingredientName]),
    building: true
  };
  return updateObject(state, updatedSt);
};

const setSnackIngredients = (state, action) => {
  if (action.snackType === 'burger') {
    return updateObject(state, {
      ingredients: {
        salad: action.ingredients.salad,
        bacon: action.ingredients.bacon,
        cheese: action.ingredients.cheese,
        meat: action.ingredients.meat
      },
      totalPrice: 4,
      error: false,
      building: false,
      snackType: 'burger'
    });
  } else {
    return updateObject(state, {
      ingredients: {
        paprika: action.ingredients.paprika,
        pepperoni: action.ingredients.pepperoni,
        onion: action.ingredients.onion,
        olive: action.ingredients.olive
      },
      totalPrice: 4,
      error: false,
      building: false,
      snackType: 'pizza'
    });
  }
};

const fetchSnackIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const snackBuildInit = (state, action) => {
  return updateObject(state, { building: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SNACK_INGREDIENT: return addSnackIngredient(state, action);
    case actionTypes.REMOVE_SNACK_INGREDIENT: return removeSnackIngredient(state, action);
    case actionTypes.SET_SNACK_INGREDIENTS: return setSnackIngredients(state, action);
    case actionTypes.FETCH_SNACK_INGREDIENTS_FAILED: return fetchSnackIngredientsFailed(state, action);
    case actionTypes.SNACK_BUILD_INIT: return snackBuildInit(state, action);
    default: return state;
  }
};

export default reducer;
