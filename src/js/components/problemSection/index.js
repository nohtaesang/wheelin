import React from 'react';
import styled from 'styled-components';
import Problem from 'js/components/problem';

const ProblemSection = props => {
	const { feProblems, setFeProblems, setSelectedProblem, selectedProblem } = props;
	return (
		<Wrap>
			<div className="section-label">학습지 상세 편집</div>
			{feProblems.map((problem, index) => (
				<Problem
					key={problem.id}
					index={index}
					problem={problem}
					feProblems={feProblems}
					setFeProblems={setFeProblems}
					setSelectedProblem={setSelectedProblem}
					selectedProblem={selectedProblem}
				/>
			))}
		</Wrap>
	);
};

export default ProblemSection;

const Wrap = styled.div`
	width: 646px;
	border-right: solid 2px #e0e0e0;
	.section-label {
		display: flex;
		padding-left: 23px;
		align-items: center;
		box-sizing: border-box;
		width: 646px;
		height: 48px;
		font-size: 14px;
		color: #4c4c4c;
		background: #fff;
		border-bottom: solid 3px #f5f5f5;
		font-weight: bold;
	}
`;
