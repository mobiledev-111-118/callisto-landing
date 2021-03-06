import { all, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { actionTypes, getCoinPriceSuccess } from './action';

const temp = "http://135.181.196.253:8000/clo_metrics";

function* getCoinPrice() {
    try {
        const res = yield call(axios.get, temp);
        
        if( res.status === 200 ) {
            yield put(getCoinPriceSuccess(res.data.callisto));
        }
    } catch(err) {
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_COIN_PRICE, getCoinPrice)]);
}
