import axios from 'axios';
import { put, takeLatest, all, call } from 'redux-saga/effects';

import { 
    GET_VISITOR_REQUEST, 
    GET_VISITOR_SUCCESS, 
    GET_VISITOR_FAILURE,
}  from './types';

export const getVisitor = () => {
    return { type: GET_VISITOR_REQUEST };
}

function *requestGetVisitor() {
    const { response, error } = yield call(() => {
        return axios.get('visitor')
                .then(response => ({ response }))
                .catch(error => ({ error }));
    });

    if(response) {
        yield put({ type: GET_VISITOR_SUCCESS, data: response.data.rows });
    } else {
        yield put({ type: GET_VISITOR_FAILURE, error: error.toString() });
    }
};

function *watchGetVisitor() {
    yield takeLatest(GET_VISITOR_REQUEST, requestGetVisitor);
}

export default function *() {
    yield all([
        watchGetVisitor()
    ]);
}
