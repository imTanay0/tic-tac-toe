import React, { useState } from "react";
import Board from "./Board";
import WinnerStyle from './WinnerStyle'

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

	console.log(winLine)

	// let isRomove = false
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
		status = "Next player: " + (xIsNext ? "X" : "O");
	}

	// handle Click
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

	return (
		<div className="game">
			<div id="player">{status}</div>
			<div className="game-board">
				<Board squares={current.squares} onClick={(i) => handleClick(i)} />
			</div>
			<p>
				<button className="restart-btn" onClick={() => jumpTo()}>Restart</button>
			</p>

			{/* {winner ? <WinnerStyle winnerLine={winLine}/> : null} */}

			<WinnerStyle />

		</div>
	);
}
