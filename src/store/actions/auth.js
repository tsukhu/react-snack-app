import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token,userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDJCQXL1e2p_DQDnB-OQfJy5JEX26JRGzM';
    if (!isSignup) {
      url =
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDJCQXL1e2p_DQDnB-OQfJy5JEX26JRGzM';
    }
    axios
      .post(url, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(
            response.data.idToken,
            response.data.localId));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
