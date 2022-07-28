import { takeEvery, put, delay } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function* log(action: PayloadAction) {
//     console.log('Log', action);
// }
function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('Wait 2s');

    // Wait 2s
    yield delay(2000);

    console.log('Waiting done, dispatch action');

    // Dispatch action success

    yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
    console.log('couter saga');
    yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
    // yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
