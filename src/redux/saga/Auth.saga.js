import { call, takeEvery, put, all } from 'redux-saga/effects'
import { forgotapi, Signinapi, Signupapi } from '../../common/api/Auth.api';
import { setAlert } from '../action/Alert.action';
import * as ActionTypes from '../ActionTypes';

function* SignUp(action) {
  try {
    const user = yield call(Signupapi, action.payload);
    yield put(setAlert({ text: user.payload, color: 'success' }))
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: 'error' }))

  }
}

function* watchSignUp() {
  yield takeEvery(ActionTypes.SIGN_UP_ACTION, SignUp);
}



function* SignIn(action) {
  try {
    const user = yield call(Signinapi, action.payload);
    console.log(user);
    history.push("/")
    yield put(setAlert({ text: "Login succsesfully", color: 'success' }))
  } catch (e) {
    yield put(setAlert({ text: e, color: 'error' }))
  }
}

function* forgot(action){
  try {
      const user = yield call(forgotapi, action.payload);
      yield put(setAlert({ text: user.payload, color: "success" }))
      console.log(user);
      yield put(signedInAction(user))
      history.push('/')
  } catch (e) {
      yield put(setAlert({ text: e.payload, color: "error" }))
      console.log(e);
  }
}

function* watchForgot() {
  yield takeEvery(ActionTypes.FORGOT_ACTION,forgot)
}


function* watchSignIn() {
  yield takeEvery(ActionTypes.SIGN_IN_ACTION, SignIn);
}


export function* signUpSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchForgot()
  ])
}