import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Modal } from "../types";

type SliceState = {
	user: string | null,
	roomId: string | null,
	game: string | null,
	modal: Modal
}

const initialState: SliceState = {
	user: sessionStorage.getItem('user'),
	roomId: sessionStorage.getItem('roomId'),
	game: sessionStorage.getItem('game'),
	modal: {
		isOpen: false,
		message: 'Everything is ok',
	},
}

const slice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<string>) => {
			state.user = action.payload;
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
	},
})

export const { setUser, setGame, setRoomId, showModal, hideModal } = slice.actions;

export default slice.reducer;

{ }