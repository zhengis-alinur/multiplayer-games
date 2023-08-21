import { Game, User } from "../types";
import { setGame, setRoomId, setUser } from "./reducer";
import { AppDispatch } from "./store";

export const setUserThunk = (dispatch: AppDispatch, user: User) => {
	sessionStorage.setItem('userName', user.userName || '');
	sessionStorage.setItem('userId', user.userId || '');
	dispatch(setUser(user));
}

export const setRoomIdThunk = (dispatch: AppDispatch, { roomId }: { roomId: string }) => {
	sessionStorage.setItem('roomId', roomId);
	dispatch(setRoomId(roomId));
}

export const setGameThunk = (dispatch: AppDispatch, { game }: { game: Game }) => {
	sessionStorage.setItem('game', game);
	dispatch(setGame(game));
}