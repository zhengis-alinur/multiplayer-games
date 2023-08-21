import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { selectGameData, selectUserId } from "../../../redux/selectors";
import { GameData, TictactoeGameData } from "../../../types";
import Circle from "./Symbols/Circle";
import Empty from "./Symbols/Empty";
import X from "./Symbols/X";

const GameBoard = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	const gameData = useAppSelector(selectGameData) as GameData;
	const userId = useAppSelector(selectUserId);
	const userGameData = gameData[userId] as TictactoeGameData;
	const gameSide = userGameData?.gameSide;

	const [board, setBoard] = useState<Array<Array<string>>>(Array(3).fill(Array(3).fill("")));
	const onCellClick = (row: number, col: number) => {
		const temp = [...board];
		temp[row][col] = gameSide;
		setBoard(temp);
	};

	return (
		<div className={`flex flex-col ${props.className}`}>
			{board.map((row, rowIndex) => (
				<div className="flex" key={rowIndex}>
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
									event.stopPropagation();
									onCellClick(rowIndex, colIndex);
								}}
								className={`${border} w-150 h-150 flex justify-center items-center text-9xl`}
							>
								{board[rowIndex][colIndex] && board[rowIndex][colIndex] === "X" ? <X /> : <Circle />}
							</div>
						);
					})}
				</div>
			))}
		</div>
	);
};

export default GameBoard;
