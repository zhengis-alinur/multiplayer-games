import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import socket from "../socket";
import { useAppDispatch } from "../redux/store";
import { showModal } from "../redux/reducer";
import { setRoomIdThunk } from "../redux/thunk";
import { useAppSelector } from "../redux/hooks";
import { selectGame, selectRoomId } from "../redux/selectors";

const RoomConnector = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	const [roomIdInput, setRoomIdInput] = useState<string>("");
	const game = useAppSelector(selectGame);
	const roomId = useAppSelector(selectRoomId);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		function onJoinSuccess(roomId: string) {
			dispatch(showModal(`You joined a room. ID: ${roomId}.`));
			setRoomIdThunk(dispatch, { roomId });
			navigate(`/${game}`);
		}
		function onJoinFailed() {
			dispatch(showModal("Failed on joining room. There is no room with such id or room is full"));
		}
		function onCreateRoomSuccess(roomId: string) {
			dispatch(showModal(`You created a room.  Just wait for an opponent. ID: ${roomId}.`));
			setRoomIdThunk(dispatch, { roomId });
			navigate(`/${game}`);
		}
		function onCreateRoomFailed() {
			dispatch(showModal(`Failed on creating room. You already created a room. ID: ${roomId}`));
			navigate(`/${game}`);
		}
		socket.on("joinSuccess", onJoinSuccess);
		socket.on("joinFailed", onJoinFailed);
		socket.on("createRoomSuccess", onCreateRoomSuccess);
		socket.on("createRoomFailed", onCreateRoomFailed);
	}, []);

	const onCreateRoom = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		socket.emit("createRoom", { game });
	};
	const onJoinRoom = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		socket.emit("joinRoom", { roomIdInput, game });
	};

	const onRoomIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRoomIdInput(event.target.value.trim());
	};

	return (
		<div className={`flex flex-col justify-center items-center ${props.className}`}>
			<h1 className="text-3xl">Please enter roomId</h1>
			<form className="flex flex-col items-center relative" onSubmit={onJoinRoom}>
				<div className="flex items-center">
					<Input onChange={onRoomIdChange} className="border-amber-300 mb-0" required />
					<Button className="light-button mr-0">Join</Button>
				</div>
			</form>
			<Button className="bg-cyan-400 light-button w-full mt-0" onClick={onCreateRoom}>
				Create room
			</Button>
			<TypeAnimation
				className="text-amber-300"
				sequence={["We produce food for Mice"]}
				wrapper="span"
				speed={50}
				style={{ fontSize: "1.5em", display: "inline-block" }}
			/>
		</div>
	);
};

export default RoomConnector;
