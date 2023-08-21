export type GameSide = 'X' | 'O';

export type Message = {
	text: string,
	userId: string;
}

export type Modal = {
	isOpen: boolean,
	message: string;
}

export type User = {
	userName: string | null,
	userId: string | null,
}

export type Game = 'tictactoe' | 'typerace'

export type GameData = Record<string, TictactoeGameData | TypeRaceGameData>;

export type TictactoeGameData = {
	gameSide: 'X' | 'O';
	moves: string[][];
};

export type TypeRaceGameData = {
	text: string;
};

export type Room = {
	users: string[];
	gameData: Map<string, TictactoeGameData | TypeRaceGameData>;
};
