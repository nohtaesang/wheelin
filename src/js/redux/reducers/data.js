import { dataActions } from '../actions/data';
const dataState = {
	feProblems: [],
	feSimilars: [],
	selectedProblem: null
};

const dataReducer = (state = dataState, action) => {
	switch (action.type) {
		case dataActions.GET_FE_DATA:
			return state;
		case dataActions.GET_FE_DATA_SUCCESS:
			return { ...state, feProblems: action.payload.feProblems, feSimilars: action.payload.feSimilars };
		case dataActions.SET_SELECTED_PROBLEM:
			return { ...state, selectedProblem: action.payload };
		case dataActions.SET_FE_PROBLEMS:
			return { ...state, feProblems: action.payload };
		case dataActions.SET_FE_SIMILARS:
			return { ...state, feSimilars: action.payload };
		default:
			return state;
	}
};

export default dataReducer;
