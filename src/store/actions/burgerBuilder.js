import * as actionTypes from './actionTypes';
//import axios from '../../axios-orders';

export const addBurgerIngredient = ( name ) => {
    return {
        type: actionTypes.ADD_BURGER_INGREDIENT,
        ingredientName: name
    };
};

export const removeBurgerIngredient = ( name ) => {
    return {
        type: actionTypes.REMOVE_BURGER_INGREDIENT,
        ingredientName: name
    };
};

export const setBurgerIngredients = ( ingredients ) => {
    return {
        type: actionTypes.SET_BURGER_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchBurgerIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_BURGER_INGREDIENTS_FAILED
    };
};

export const burgerBuildInit = () => {
    return {
        type: actionTypes.BURGER_BUILD_INIT
    };
};



export const initBurgerIngredients = () => {
    return {
        type: actionTypes.INIT_BURGER_INGREDIENTS
    };
};