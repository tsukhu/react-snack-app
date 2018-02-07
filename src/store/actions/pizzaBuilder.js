import * as actionTypes from './actionTypes';
//import axios from '../../axios-orders';

export const addPizzaIngredient = ( name ) => {
    return {
        type: actionTypes.ADD_PIZZA_INGREDIENT,
        ingredientName: name
    };
};

export const removePizzaIngredient = ( name ) => {
    return {
        type: actionTypes.REMOVE_PIZZA_INGREDIENT,
        ingredientName: name
    };
};

export const setPizzaIngredients = ( ingredients ) => {
    return {
        type: actionTypes.SET_PIZZA_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchPizzaIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_PIZZA_INGREDIENTS_FAILED
    };
};

export const pizzaBuildInit = () => {
    return {
        type: actionTypes.PIZZA_BUILD_INIT
    };
};



export const initPizzaIngredients = () => {
    return {
        type: actionTypes.INIT_PIZZA_INGREDIENTS
    };
};