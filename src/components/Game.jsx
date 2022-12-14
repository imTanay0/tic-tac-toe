import React, { useState } from "react";
import { render } from "react-dom";
import Board from "./Board";

export default function Game() {
	const [history, setHistory] = useState([
		{
			squares: new Array(9).fill(null),
		},
	]);
	const [xIsNext, setXIsNext] = useState(true);
	const [stepNumber, setStepNumber] = useState(0)

	let winLine = -1

	const calculateWinner = (squares) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				winLine = i
				return squares[a];
			}
		}

		return null;
	};

	const newHistory = history;
	const current = newHistory[stepNumber];
	const winner = calculateWinner(current.squares);

	function jumpTo() {
		setXIsNext(true)
		const step = stepNumber

		setStepNumber(0)

		const squares = history[step].squares

		const squareClicked = document.getElementsByClassName('square')

		for (var i = 0; i < 9; i++) {
			const classess = squareClicked[i].classList.value
			if (classess.includes('square-clicked')) {
				squareClicked[i].classList.remove('square-clicked')
			}
		}
	}

	let status;

	if (winner) {
		status = "Winner: " + winner;
	} else {
		if (history.length === 10) {
			status = "DRAW";
		} else {
			status = "Next player: " + (xIsNext ? "X" : "O");
		}
	}

	function handleClick(i) {
		const newHistory = history.slice(0, stepNumber + 1);
		const current = newHistory[stepNumber];
		const newSquares = current.squares.slice();

		if (calculateWinner(newSquares) || newSquares[i]) {
			return;
		}

		newSquares[i] = xIsNext ? "X" : "O";

		setHistory(
			newHistory.concat([
				{
					squares: newSquares
				},
			])
		);
		setStepNumber(newHistory.length)
		setXIsNext(!xIsNext)

		const square_clicked = document.getElementsByClassName('square')
		square_clicked[i].classList.add("square-clicked")
	}

	const lineClasses = ['line1', 'line2', 'line3', 'line4', 'line5', 'line6', 'line7', 'line8']
	
	return (
		<div className="game">

			{winner ? <div id={lineClasses[winLine]} style={{
				visibility: 'visible'
			}}/> : null}
		
			<div id="player">{status}</div>
			<div className="game-board">
				<Board squares={current.squares} onClick={(i) => handleClick(i)} />
			</div>
			<p>
				<button className="restart-btn" onClick={() => jumpTo()}>Restart</button>
			</p>
		</div>
	);
}
