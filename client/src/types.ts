export type GameSide = 'X' | 'O';

export type Message = {
	text: string,
	userId: string;
}

export type Modal = {
	isOpen: boolean,
	message: string;
}

export type Game = 'tictactoe' | 'typerace'