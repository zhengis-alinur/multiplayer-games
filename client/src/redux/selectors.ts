import { RootState } from "./store";

export const selectUser = (state: RootState) => state.user;
export const selectRoomId = (state: RootState) => state.roomId;
export const selectModal = (state: RootState) => state.modal;
export const selectGame = (state: RootState) => state.game;