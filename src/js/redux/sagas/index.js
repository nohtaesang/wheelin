import { all } from 'redux-saga/effects';
import { watchGetFeData } from './data';

export default function* rootSaga() {
	yield all([watchGetFeData()]);
}
