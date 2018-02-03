import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseBurgerStart = (state,action) => {
  return updateObject(state,{
    loading: true,
    purchased: false
  });
}

const purchaseBurgerSuccess = (state,action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId
  };
  return updateObject(state,{
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
}

const purchaseBurgerFailed = (state,action) => {
  return updateObject(state,{
    loading: false,
    purchased: false
  });
}

const purchaseOrderStart = (state,action) => {
  return updateObject(state,{
    loading: true
  });
}

const purchaseOrderSuccess = (state,action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false
  });
}

const purchaseOrderFailed = (state,action) => {
  return updateObject(state,{
    loading: false
  });
}
const purchaseInit = (state,action) => {
  return updateObject(state,{
    purchased: false
  });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state,action);   
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state,action);
    case actionTypes.PURCHASE_BURGER_FAILED: return purchaseBurgerFailed(state,action);
    case actionTypes.FETCH_ORDERS_START: return purchaseOrderStart(state,action);
    case actionTypes.FETCH_ORDERS_SUCCESS: return purchaseOrderSuccess(state,action);
    case actionTypes.FETCH_ORDERS_FAILED: return purchaseOrderFailed(state,action);
    case actionTypes.PURCHASE_INIT: return purchaseInit(state,action);
    default: return state;
  }
};

export default reducer;
