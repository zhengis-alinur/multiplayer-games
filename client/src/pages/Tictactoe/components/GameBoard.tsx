import { useState } from "react";
import Circle from "./Circle";
import X from "./X";

const GameBoard = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	const gameSide = "O";
	const [board, setBoard] = useState<Array<Array<string>>>(Array(3).fill(Array(3).fill("O")));

	const onCellClick = (row: number, col: number) => {};

	return (
		<div className={`flex flex-col ${props.className}`}>
			{board.map((row, rowIndex) => (
				<div className="flex">
					{row.map((cell, colIndex) => {
						let border = "";
						if (rowIndex === 0) border = "border-b-8";
						if (rowIndex === 2) border = "border-t-8";
						if (colIndex === 0) border += " border-r-8";
						if (colIndex === 2) border += " border-l-8";
						return (
							<div
								key={`${rowIndex}${colIndex}`}
								onClick={(event) => {
									onCellClick(rowIndex, colIndex);
								}}
								className={`${border} w-150 h-150 flex justify-center items-center text-9xl`}
							>
								{rowIndex % 2 === 0 ? <X /> : <Circle />}
							</div>
						);
					})}
				</div>
			))}
		</div>
	);
};

export default GameBoard;
