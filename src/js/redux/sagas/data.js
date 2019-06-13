import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import config from 'js/static/config';
import { dataActions } from '../actions/data';
import feProblemsJson from 'static/feProblems.json';
import feSimilarsJson from 'static/feSimilars.json';
export function* watchGetFeData() {
	yield takeLatest(dataActions.GET_FE_DATA, getFeData);
}

function* getFeData() {
	const { feProblemsUrl, feSimilarsUrl } = config;
	// try {
	// 	const feProblem = yield axios.get(feProblemsUrl);
	// 	const feSimilars = yield axios.get(feSimilarsUrl);
	// 	yield put({ type: dataActions.GET_FE_DATA_SUCCESS, payload: { feProblem, feSimilars } });
	// } catch (err) {
	// 	console.log(err);
	// }

	yield put({
		type: dataActions.GET_FE_DATA_SUCCESS,
		payload: { feProblems: feProblemsJson.data, feSimilars: feSimilarsJson.data }
	});
}
