import http from 'http';
import app from './app';

import path from 'path';
import dotenv from 'dotenv';
import { Socket } from 'socket.io';
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
const rooms: { [key: string]: Map<string, string[]> } = { tictactoe: new Map(), typerace: new Map() };

io.on('connection', async (socket: Socket) => {
	console.log('A user connected');
	socket.on('login', ({ userName, roomId }: { userName: string; roomId: string }) => {
		users.set(socket.id, userName);
		socket.emit('loginSuccess', userName);
		if (!rooms.tictactoe.get(roomId) && !rooms.typerace.get(roomId)) {
			socket.emit('roomLoginFailed', userName);
		}
	});
	socket.on('createRoom', ({ game }: { game: string }) => {
		const roomId = socket.id;
		if (!rooms[game].has(roomId)) {
			rooms[game].set(roomId, [roomId]);
			socket.join(roomId);
			socket.emit('createRoomSuccess', roomId);
		} else {
			socket.emit('createRoomFailed');
		}
	});
	socket.on('joinRoom', ({ roomId, game }) => {
		console.log(game);
		const room = rooms[game].get(roomId);
		if (!room) {
			// Create a new room if it doesn't exist
			rooms[game].set(roomId, [socket.id]);
			socket.join(roomId);
			socket.emit('joinFailed');
		} else if (room.length < MAX_USERS_PER_ROOM) {
			// Add the user to the existing room if there's space
			room.push(socket.id);
			rooms[game].set(roomId, room);
			socket.join(roomId);
			socket.emit('joinSuccess', roomId);
		} else {
			// The room is full, notify the user
			socket.emit('joinFailed');
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
