import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";

function delay(duration) {
    const promise = new Promise(resolve => {
        setTimeout(() => resolve(true), duration)
    })
    return promise
}

function* watchMetrics() {
    while (true) {
        try {
            const { error, data } = yield call(API.getMetrics);
            if (error) {
                yield put({ type: actions.API_ERROR, code: error.code || 'Failed to fetch' });
                yield cancel();
                return;
            }
            yield put({ type: actions.METRICS_RECEIVED, data });
            yield call(delay, 4000);
        }
        catch (error) {
            yield put({ type: actions.API_ERROR, code: error.code || 'Failed to fetch' });
            yield cancel();
            return;
        }
    }
}

function* watchAppLoad() {
    yield all([
        takeEvery(actions.FETCH_METRICS, watchMetrics),
    ]);
}

export default [watchAppLoad];
