import * as actionTypes from './actionTypes';

export const purchaseSnackSuccess = ( id, orderData ) => {
    return {
        type: actionTypes.PURCHASE_SNACK_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseSnackFail = ( error ) => {
    return {
        type: actionTypes.PURCHASE_SNACK_FAIL,
        error: error
    };
}

export const purchaseSnackStart = () => {
    return {
        type: actionTypes.PURCHASE_SNACK_START
    };
};

export const snackBuildInit = () => {
    return {
        type: actionTypes.SNACK_BUILD_INIT
    };
};

export const purchaseSnack = ( orderData, token ) => {
    return {
        type: actionTypes.PURCHASE_SNACK,
        orderData: orderData,
        token: token
    };
};

export const purchaseInit = (snackType) => {
    return {
        type: actionTypes.PURCHASE_INIT,
        snackType: snackType
    };
};

export const fetchOrdersSuccess = ( orders ) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token,userId) => {
    return {
        type: actionTypes.FETCH_ORDERS,
        token: token,
        userId: userId
    };
};