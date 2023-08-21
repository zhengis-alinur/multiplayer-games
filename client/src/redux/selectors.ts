import { RootState } from "./store";

export const selectUser = (state: RootState) => state.user || '';
export const selectUserId = (state: RootState) => state.user.userId || '';
export const selectUserName = (state: RootState) => state.user.userName || '';
export const selectRoomId = (state: RootState) => state.roomId || '';
export const selectModal = (state: RootState) => state.modal;
export const selectGame = (state: RootState) => state.game || '';
export const selectGameData = (state: RootState) => state.gameData;