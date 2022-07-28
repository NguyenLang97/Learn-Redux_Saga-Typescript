import { all } from 'redux-saga/effects';
import counterSaga from '../features/counter/counterSaga';

function* helloSaga() {
    console.log('helloSaga');
}

export default function* rootSaga() {
    console.log('Root Saga');
    yield all([helloSaga(), counterSaga()]);
}
