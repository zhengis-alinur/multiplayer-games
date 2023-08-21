export type TictactoeGameData = {
	gameSide: 'X' | 'O';
	moves: string[];
};

export type TypeRaceGameData = {
	text: string;
};

export type GameData = TictactoeGameData | TypeRaceGameData;

export type Room = {
	users: string[];
	gameData: Map<string, GameData>;
};

export type Rooms = { [key: string]: Map<string, Room> };
