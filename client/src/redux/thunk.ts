import { Game } from "../types";
import { setGame, setRoomId, setUser } from "./reducer";
import { AppDispatch } from "./store";

export const setUserThunk = (dispatch: AppDispatch, { userName }: { userName: string }) => {
	sessionStorage.setItem('user', userName);
	dispatch(setUser(userName));
}

export const setRoomIdThunk = (dispatch: AppDispatch, { roomId }: { roomId: string }) => {
	sessionStorage.setItem('roomId', roomId);
	dispatch(setRoomId(roomId));
}

export const setGameThunk = (dispatch: AppDispatch, { game }: { game: Game }) => {
	sessionStorage.setItem('game', game);
	dispatch(setGame(game));
}