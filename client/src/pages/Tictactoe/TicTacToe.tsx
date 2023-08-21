import { useEffect, useState } from "react";
import Page from "../../components/Page";
import RoomConnector from "../RoomConnector";
import { OSide, TICTACTOE, XSide } from "../../constants";
import GameBoard from "./components/GameBoard";
import GameChat from "./components/GameChat";
import GameSide from "./components/GameSide";
import { useAppSelector } from "../../redux/hooks";
import { selectRoomId } from "../../redux/selectors";

const TicTacToe = () => {
	const room = useAppSelector(selectRoomId);

	return (
		<Page title="Tic-Tac-Toe" subtitle="you know the rules of this game">
			<div className="flex justify-between w-full gap-10">
				<GameChat className="flex-1" />
				<GameBoard className="flex-1" />
				<div className="flex flex-col justify-start items-center flex-1">
					<GameSide className="flex-1" title="You are" gameSide={XSide} />
					<GameSide className="flex-1" title="Opponent" gameSide={OSide} />
				</div>
			</div>
		</Page>
	);
};

export default TicTacToe;
