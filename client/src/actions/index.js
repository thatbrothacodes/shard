import { all } from 'redux-saga/effects';
import experiencesSagas from '../experiences/actions';
import insightsSagas from '../insights/actions';
import overviewSagas from '../overview/actions';
import segmentsSagas from '../segments/actions';
import visitorSagas from '../visitor/actions';

export default function *() {
    yield all([
        experiencesSagas(),
        insightsSagas(),
        overviewSagas(),
        segmentsSagas(),
        visitorSagas()
    ]);
}