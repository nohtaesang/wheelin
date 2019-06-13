import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// actions
import { getFeData, setFeProblems, setSelectedProblem, setFeSimilars } from 'js/redux/actions/data';
// components
import ProblemSection from 'js/components/problemSection';
import SimilarSection from 'js/components/similarSection';

function App(props) {
	const { feProblems, feSimilars, selectedProblem } = props;
	const { getFeData, setFeProblems, setSelectedProblem, setFeSimilars } = props;

	console.log('feProblems: ', feProblems);
	console.log('feSimilars: ', feSimilars);

	useEffect(
		() => {
			if (!getFeData) return;
			getFeData();
		},
		[getFeData]
	);

	return (
		<Wrap className="App">
			<ProblemSection
				feProblems={feProblems}
				setFeProblems={setFeProblems}
				setSelectedProblem={setSelectedProblem}
				selectedProblem={selectedProblem}
			/>
			<SimilarSection
				feSimilars={feSimilars}
				setFeProblems={setFeProblems}
				selectedProblem={selectedProblem}
				setFeSimilars={setFeSimilars}
				feProblems={feProblems}
			/>
		</Wrap>
	);
}

const mapStateToProps = state => {
	const { dataReducer } = state;
	const { feProblems, feSimilars, selectedProblem } = dataReducer;
	return { feProblems, feSimilars, selectedProblem };
};

const mapDispatchToProps = { getFeData, setFeProblems, setSelectedProblem, setFeSimilars };

export default connect(mapStateToProps, mapDispatchToProps)(App);

const Wrap = styled.div`
	width: 1312px;
	display: flex;
	flex-direction: row;
`;
