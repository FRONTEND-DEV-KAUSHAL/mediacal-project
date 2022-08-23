import { all } from 'redux-saga/effects'
import { signUpSaga } from './Auth.saga'

export function* rootSaga(){
    yield all([
        signUpSaga()
    ])
}