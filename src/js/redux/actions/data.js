export const dataActions = {
	GET_FE_DATA: 'GET_FE_DATA',
	GET_FE_DATA_SUCCESS: 'GET_FE_DATA_SUCCESS',
	SET_SELECTED_PROBLEM: 'SET_SIMILAR_PROBLEM',
	SET_FE_PROBLEMS: 'SET_FE_PROBLEM',
	SET_FE_SIMILARS: 'SET_FE_SIMILARS'
};

export const getFeData = () => ({ type: dataActions.GET_FE_DATA });
export const setSelectedProblem = payload => ({ type: dataActions.SET_SELECTED_PROBLEM, payload });
export const setFeProblems = payload => ({ type: dataActions.SET_FE_PROBLEMS, payload });
export const setFeSimilars = payload => ({ type: dataActions.SET_FE_SIMILARS, payload });
