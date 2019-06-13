import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Similar from 'js/components/similar';

const ProblemSection = props => {
	const { feSimilars, selectedProblem, setFeSimilars, feProblems, setFeProblems } = props;
	console.log(feSimilars);
	return (
		<Wrap>
			<div className="section-label">문항 교체/추가</div>
			{selectedProblem ? (
				feSimilars.map((similar, index) => (
					<Similar
						key={similar.id}
						index={index}
						similar={similar}
						feSimilars={feSimilars}
						selectedProblem={selectedProblem}
						setFeSimilars={setFeSimilars}
						feProblems={feProblems}
						setFeProblems={setFeProblems}
					/>
				))
			) : (
				<div className="non-selected">
					<div className="non-selected-text">
						<div className="in-text-btn btn">유사 문항</div>버튼을 누르면
					</div>
					<div className="non-selected-text">해당 문제의 유사 문항을 볼 수 있습니다.</div>
				</div>
			)}
		</Wrap>
	);
};

export default ProblemSection;

const Wrap = styled.div`
	width: 646px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	border-left: solid 8px #f5f5f5;
	.section-label {
		width: 646px;
		height: 48px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		color: #4c4c4c;
		background: #fff;
		border-bottom: solid 3px #f5f5f5;
		font-weight: bold;
	}
	.non-selected {
		margin-top: 312px;
		width: 646px;
		height: 673px;
		.non-selected-text {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 14px;
			.in-text-btn {
				width: 70px;
				height: 24px;
			}
		}
	}
`;
