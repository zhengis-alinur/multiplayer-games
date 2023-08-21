import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameData, Modal, User } from "../types";

type SliceState = {
	user: User,
	roomId: string | null,
	game: string | null,
	modal: Modal,
	gameData: GameData | null
}

const initialState: SliceState = {
	user: {
		userName: sessionStorage.getItem('userName'),
		userId: sessionStorage.getItem('userId')
	},
	roomId: sessionStorage.getItem('roomId'),
	game: sessionStorage.getItem('game'),
	modal: {
		isOpen: false,
		message: 'Everything is ok',
	},
	gameData: {
		[sessionStorage.getItem('userId') || '']: {
			gameSide: 'X',
			moves: []
		}
	}
}

const slice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<Partial<User>>) => {
			state.user = { ...state.user, ...action.payload };
		},
		setGame: (state, action: PayloadAction<string>) => {
			state.game = action.payload;
		},
		setRoomId: (state, action: PayloadAction<string | null>) => {
			state.roomId = action.payload;
		},
		showModal: (state, action: PayloadAction<string>) => {
			state.modal = {
				isOpen: true,
				message: action.payload
			};
		},
		hideModal: (state) => {
			state.modal = {
				isOpen: false,
				message: ''
			};
		},
		setGameData: (state, action: PayloadAction<GameData>) => {
			state.gameData = action.payload;
		},
	},
})

export const { setUser, setGame, setRoomId, showModal, hideModal, setGameData } = slice.actions;

export default slice.reducer;

{ }