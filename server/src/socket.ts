import http from 'http';
import app from './app';

import path from 'path';
import dotenv from 'dotenv';
import { Socket } from 'socket.io';
import { Rooms } from './types';
import { TICTACTOE } from './constants';
import { setRandomTicTacToe } from './utils';
dotenv.config({ path: path.join(__dirname, '../', '.env') });

const server = http.createServer(app);
const io = require('socket.io')(server, {
	cors: {
		origin: process.env.CORS_CLIENT,
		methods: ['GET', 'POST'],
		credentials: true
	}
});

const users: Map<string, string> = new Map();
const MAX_USERS_PER_ROOM = 2;

const rooms: Rooms = {
	tictactoe: new Map(),
	typerace: new Map()
};

io.on('connection', async (socket: Socket) => {
	console.log('A user connected');
	socket.on('login', ({ userName, roomId }: { userName: string; roomId: string }) => {
		users.set(socket.id, userName);
		console.log(userName);
		socket.emit('loginSuccess', { userName, userId: socket.id });
		if (!rooms.tictactoe.get(roomId) && !rooms.typerace.get(roomId)) {
			socket.emit('roomLoginFailed');
		}
	});
	socket.on('createRoom', ({ game }: { game: string }) => {
		const roomId = socket.id;
		if (!rooms[game].has(roomId)) {
			const room = { users: [roomId], gameData: new Map().set(socket.id, []) };
			rooms[game].set(roomId, room);
			socket.join(roomId);
			socket.emit('createRoomSuccess', roomId);
			socket.emit('joinSuccess', { roomId, gameData: room.gameData });
		} else {
			socket.emit('createRoomFailed');
		}
	});
	socket.on('joinRoom', ({ roomId, game }) => {
		const room = rooms[game].get(roomId);
		if (!room) {
			socket.emit('joinFailed');
		} else if (room.users.length < MAX_USERS_PER_ROOM) {
			room.users.push(socket.id);

			rooms[game].set(roomId, room);

			socket.join(roomId);
			socket.emit('joinSuccess', { roomId, gameData: room.gameData });
		} else {
			socket.emit('joinFailed');
		}
	});

	socket.on('tictactoeInit', ({ roomId }: { roomId: string }) => {
		const room = rooms[TICTACTOE].get(roomId);
		if (room?.users.length === 2) {
			setRandomTicTacToe(room);
			const gameData = JSON.stringify(Object.fromEntries(room?.gameData));
			socket.emit('tictactoeInitSuccess', { gameData });
			socket.to(roomId).emit('tictactoeInitSuccess', { gameData });
		}
	});

	socket.on('disconnecting', () => {
		// for (const [roomId, room] of rooms[game].entries()) {
		// 	const index = room.indexOf(socket.id);
		// 	if (index !== -1) {
		// 		room.splice(index, 1);
		// 		if (room.length === 0) {
		// 			rooms.delete(roomId);
		// 		} else {
		// 			rooms.set(roomId, room);
		// 		}
		// 		break;
		// 	}
		// }
	});
});

export { server, io };
