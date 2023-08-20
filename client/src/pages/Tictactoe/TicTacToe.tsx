import { useEffect, useState } from "react";
import Page from "../../components/Page";
import RoomConnector from "../../components/RoomConnector";
import { OSide, XSide } from "../../constants";
import GameBoard from "./components/GameBoard";
import GameChat from "./components/GameChat";
import GameSide from "./components/GameSide";
import socket from "../../socket";

const TicTacToe = () => {
	const [room, setRoom] = useState<string | null>("null");
	useEffect(() => {
		const onConnect = () => {
			console.log("connection");
		};
		socket.on("connect", onConnect);
	}, []);
	return (
		<Page title="Tic-Tac-Toe" subtitle="you know the rules of this game">
			<div className="flex justify-between w-full gap-10">
				<GameChat className="flex-1" />
				{room ? <GameBoard className="flex-1" /> : <RoomConnector />}
				<div className="flex flex-col justify-start items-center flex-1">
					<GameSide className="flex-1" title="You are" gameSide={XSide} />
					<GameSide className="flex-1" title="Opponent" gameSide={OSide} />
				</div>
			</div>
		</Page>
	);
};

export default TicTacToe;
