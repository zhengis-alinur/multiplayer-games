import { TictactoeGameData, Room } from 'types';

export const setRandomTicTacToe = (room?: Room) => {
	if (!room) {
		return;
	}

	const shuffledUsers = room.users.sort(() => Math.random() - 0.5);

	const gameDataX: TictactoeGameData = {
		gameSide: 'X',
		moves: []
	};
	const gameDataO: TictactoeGameData = {
		gameSide: 'O',
		moves: []
	};
	room.gameData.set(shuffledUsers[0], gameDataX);
	room.gameData.set(shuffledUsers[1], gameDataO);
};
