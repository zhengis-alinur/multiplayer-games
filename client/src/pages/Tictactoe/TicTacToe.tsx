import { useEffect, useState } from "react";
import Page from "../../components/Page";
import RoomConnector from "../RoomConnector";
import { OSide, TICTACTOE, XSide } from "../../constants";
import GameBoard from "./components/GameBoard";
import GameChat from "./components/GameChat";
import GameSide from "./components/GameSide";
import { useAppSelector } from "../../redux/hooks";
import { selectGameData, selectRoomId, selectUserId } from "../../redux/selectors";
import socket from "../../socket";
import { GameData, TictactoeGameData } from "../../types";
import { setGameData } from "../../redux/reducer";
import { useAppDispatch } from "../../redux/store";

const TicTacToe = () => {
	const roomId = useAppSelector(selectRoomId);
	const [gameInit, setGameInit] = useState(false);

	const gameData = useAppSelector(selectGameData) as GameData;
	const userId = useAppSelector(selectUserId);
	const userGameData = gameData[userId] as TictactoeGameData;
	const gameSide = userGameData?.gameSide;

	const dispatch = useAppDispatch();

	useEffect(() => {
		const tictactoeInitSuccess = ({ gameData }: { gameData: string }) => {
			const obj: GameData = JSON.parse(gameData);
			dispatch(setGameData(obj));
			setGameInit(true);
		};
		socket.emit("tictactoeInit", { roomId });
		socket.on("tictactoeInitSuccess", tictactoeInitSuccess);
	}, []);

	return (
		<Page title="Tic-Tac-Toe" subtitle="you know the rules of this game">
			<div className="flex justify-between w-full gap-10">
				{gameInit && (
					<>
						<GameChat className="flex-1" />
						<GameBoard className="flex-1" />
						<div className="flex flex-col justify-start items-center flex-1">
							<GameSide className="flex-1" title="You are" gameSide={gameSide} />
							<GameSide
								className="flex-1"
								title="Opponent"
								gameSide={gameSide === XSide ? OSide : XSide}
							/>
						</div>
					</>
				)}
			</div>
		</Page>
	);
};

export default TicTacToe;
