import React from 'react';
import styled from 'styled-components';

const Similar = props => {
	const {
		similar,
		index,
		feProblems,
		feSimilars,
		setFeProblems,
		selectedProblem,
		setFeSimilars,
		setSelectedProblem
	} = props;
	const { problemType, unitName, problemURL } = similar;

	const onClickAdd = () => {
		const nextFeSimilars = feSimilars.slice();

		const addedSimilar = nextFeSimilars.splice(index, 1)[0];

		const problemIndex = feProblems.findIndex(p => p.id === selectedProblem);
		const nextFeProblems = feProblems
			.slice(0, problemIndex + 1)
			.concat(addedSimilar)
			.concat(feProblems.slice(problemIndex + 1));

		setFeProblems(nextFeProblems);
		setFeSimilars(nextFeSimilars);
	};
	const onClickChange = () => {
		const nextFeProblems = feProblems.slice();
		const problemIndex = feProblems.findIndex(p => p.id === selectedProblem);
		const addedProblem = nextFeProblems.splice(problemIndex, 1)[0];

		const nextFeSimilars = feSimilars.slice();
		const addedSimilar = nextFeSimilars.splice(index, 1)[0];

		setFeProblems(
			feProblems
				.slice(0, problemIndex)
				.concat(addedSimilar)
				.concat(feProblems.slice(problemIndex + 1))
		);
		setFeSimilars(
			feSimilars
				.slice(0, index)
				.concat(addedProblem)
				.concat(feSimilars.slice(index + 1))
		);
		setSelectedProblem(addedSimilar.id);
	};

	return (
		<Wrap>
			<div className="problem-header">
				<div className="problem-type">{problemType}</div>
				<div className="unit-name">{unitName}</div>
				<div className="problem-header-btn-from">
					<button className={`similar-btn btn`} onClick={onClickAdd}>
						추가
					</button>
					<button className="delete-btn btn" onClick={onClickChange}>
						교체
					</button>
				</div>
			</div>
			<div className="problem-body">
				<div className="problem-index">{index + 1}</div>
				<div className="problem-img">
					<img alt="" src={problemURL} />
				</div>
			</div>
		</Wrap>
	);
};

export default Similar;

const Wrap = styled.div`
	box-sizing: border-box;
	width: 646px;
	display: flex;
	flex-direction: column;

	border-bottom: solid 8px #f5f5f5;
	padding: 0 19px;

	.problem-header {
		box-sizing: border-box;
		position: relative;
		width: 614px;
		height: 48px;
		display: flex;
		flex-direction: row;
		background: #fff;
		border-bottom: solid 1px #f5f5f5;
		.problem-type {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 99px;
			font-size: 14px;
			color: #9f9f9f;
		}
		.unit-name {
			display: flex;
			align-items: center;
			width: 428px;
			font-size: 14px;
			color: #4c4c4c;
		}
		.problem-header-btn-from {
			position: absolute;
			top: 6px;
			right: 16px;

			display: flex;
			align-content: center;
			justify-content: center;

			.similar-btn {
				margin-right: 8px;
				width: 80px;
			}
			.delete-btn {
				width: 56px;
			}
		}
	}
	.problem-body {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		margin: 15px 0px;

		.problem-index {
			width: 99px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 24px;
			color: #02c7f2;
		}
		.problem-img {
			width: 300px;
		}
	}
`;
