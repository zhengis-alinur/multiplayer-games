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

io.on('connection', async (socket: Socket) => {
	console.log('A user connected');
	socket.on('handshake', (data: any) => {
		console.log(data);
	});
});

export { server, io };
