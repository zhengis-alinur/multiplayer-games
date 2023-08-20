import { useEffect } from "react";
import "./App.css";
import socket from "./socket";

function App() {
	useEffect(() => {
		socket.emit("handshake", "somedata");
	}, []);

	return (
		<div>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
		</div>
	);
}

export default App;
