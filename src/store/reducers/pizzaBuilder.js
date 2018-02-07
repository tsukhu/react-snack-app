import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 6,
    error: false,
    building: false
};

const PIZZA_INGREDIENT_PRICES = {
    paprika: 0.5,
    pepperoni: 1.4,
    onion: 0.3,
    olive: 0.7
};

const addPizzaIngredient = ( state, action ) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject( state.ingredients, updatedIngredient );
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + PIZZA_INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject( state, updatedState );
};

const removePizzaIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngs = updateObject( state.ingredients, updatedIng );
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - PIZZA_INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject( state, updatedSt );
};

const setPizzaIngredients = (state, action) => {
    return updateObject( state, {
        ingredients: {
            paprika: action.ingredients.paprika,
            pepperoni: action.ingredients.pepperoni,
            onion: action.ingredients.onion,
            olive: action.ingredients.olive
        },
        totalPrice: 6,
        error: false,
        building: false
    } );
};

const fetchPizzaIngredientsFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const pizzaBuildInit = (state, action) => {
    return updateObject( state, { building: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_PIZZA_INGREDIENT: return addPizzaIngredient( state, action );
        case actionTypes.REMOVE_PIZZA_INGREDIENT: return removePizzaIngredient(state, action);
        case actionTypes.SET_PIZZA_INGREDIENTS: return setPizzaIngredients(state, action);    
        case actionTypes.FETCH_PIZZA_INGREDIENTS_FAILED: return fetchPizzaIngredientsFailed(state, action);
        case actionTypes.PIZZA_BUILD_INIT: return pizzaBuildInit(state,action);
        default: return state;
    }
};

export default reducer;