// import React from 'react';
import { useState } from 'react';
import Square from './Square';

export default function Board(props) {

	// const [squares, setSquares] = useState(new Array(9).fill(null));
	// const [xIsNext, setXIsNext] = useState(true)

	// const calculateWinner = (squares) => {
	// 	const lines = [
	// 		[0, 1, 2],
	// 		[3, 4, 5],
	// 		[6, 7, 8],
	// 		[0, 3, 6],
	// 		[1, 4, 7],
	// 		[2, 5, 8],
	// 		[0, 4, 8],
	// 		[2, 4, 6]
	// 	];

	// 	for (let i = 0; i < lines.length; i++) {
	// 		const [a, b, c] = lines[i];
	// 		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
	// 			return squares[a];
	// 		}
	// 	}

	// 	return null;
	// }

	// const winner = calculateWinner(squares);
	// let status;

	// if (winner) {
	// 	status = "Winner: " + winner;
	// } else {
	// 	status = 'Next player: ' + (xIsNext ? 'X' : 'O');
	// }

	// function handleClick(i) {
	// 	const newSquares = squares.slice();
		
	// 	if (calculateWinner(newSquares) || newSquares[i]) {
	// 		return;
	// 	}
		
	// 	newSquares[i] = xIsNext ? 'X' : 'O'
		
	// 	setSquares(newSquares)
	// 	setXIsNext(!xIsNext)
	// }

	function renderSquare(i) {
		return (<Square
			value={props.squares[i]}
			onClick={() => {
				props.onClick(i)
			}}
		/>)
	}

	return (
		<div>
			<div className="status">{props.status}</div>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	)
}