import { call, takeEvery, put, all } from 'redux-saga/effects'
import { Signinapi, Signupapi } from '../../common/api/Auth.api';
import * as ActionTypes from '../ActionTypes';

function* SignUp(action) {
   try {
      const user = yield call(Signupapi, action.payload);
      console.log(user);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchSignUp() {
  yield takeEvery(ActionTypes.SIGN_UP_ACTION, SignUp);
}

function* SignIn(action) {
  try {
     const user = yield call(Signinapi, action.payload);
     console.log(user);
   //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
   //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* watchSignIn() {
  yield takeEvery(ActionTypes.SIGN_IN_ACTION, SignIn);
}


export function* signUpSaga() {
    yield all([
        watchSignUp(),
        watchSignIn()
    ])
}