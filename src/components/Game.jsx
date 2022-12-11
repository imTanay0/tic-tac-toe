import React, { useState } from "react";
import Board from "./Board";

export default function Game() {
	const [history, setHistory] = useState([
		{
			squares: new Array(9).fill(null),
		},
	]);
	const [xIsNext, setXIsNext] = useState(true);
	const [stepNumber, setStepNumber] = useState(0)

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
				return squares[a];
			}
		}

		return null;
	};

	const newHistory = history;
	const current = newHistory[stepNumber];
	const winner = calculateWinner(current.squares);

	function jumpTo(step) {
		setStepNumber(step)
		setXIsNext(step % 2 === 0)
	}

	const moves = history.map((step, move) => {
		const desc = move ? "Go to move #" + move : "Go to game start";

		return (
			<li key={move}>
				<button className="move-btn" onClick={() => jumpTo(move)}>{desc}</button>
			</li>
		);
	});

	let status;

	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
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

		// adding square-clicked (CSS) class
		const square_clicked = document.getElementsByClassName('square')
		square_clicked[i].classList.add("square-clicked")
	}

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={current.squares} onClick={(i) => handleClick(i)} />
			</div>
			<div className="game-info">
				<div className="player">{status}</div>
				<ol>{moves}</ol>
			</div>
		</div>
	);
}
