import { call, takeEvery, put, all } from 'redux-saga/effects'
import { Signupapi } from '../../common/api/Auth.api';

function* SignUp(action) {
   try {
      const user = yield call(Signupapi, action.payload);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchSignUp() {
  yield takeEvery(ActionType.SIGN_UP, SignUp);
}

export function* signUpSaga() {
    yield all([
        watchSignUp()
    ])
}