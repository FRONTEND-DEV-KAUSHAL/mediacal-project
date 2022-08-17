import { all } from 'redux-saga/effects'
import { signUpSaga } from './Auth.saga'

function* rootSaga(){
    yield all([
        signUpSaga
    ])
}