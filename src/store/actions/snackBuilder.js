import * as actionTypes from './actionTypes';
//import axios from '../../axios-orders';

export const addSnackIngredient = ( snackType,name ) => {
    return {
        type: actionTypes.ADD_SNACK_INGREDIENT,
        ingredientName: name,
        snackType: snackType
    };
};

export const removeSnackIngredient = ( snackType,name ) => {
    return {
        type: actionTypes.REMOVE_SNACK_INGREDIENT,
        ingredientName: name,
        snackType: snackType
    };
};

export const setSnackIngredients = ( snackType,ingredients ) => {
    return {
        type: actionTypes.SET_SNACK_INGREDIENTS,
        ingredients: ingredients,
        snackType: snackType
    };
};

export const fetchSnackIngredientsFailed = (snackType) => {
    return {
        type: actionTypes.FETCH_SNACK_INGREDIENTS_FAILED,
        snackType: snackType
    };
};

export const snackBuildInit = () => {
    return {
        type: actionTypes.SNACK_BUILD_INIT
    };
};


export const initSnackIngredients = (snackType) => {
    return {
        type: actionTypes.INIT_SNACK_INGREDIENTS,
        snackType: snackType
    };
};