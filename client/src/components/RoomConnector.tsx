import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

const RoomConnector = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	const [roomId, setRoomId] = useState<string>("");
	const navigate = useNavigate();

	const onCreateRoom = () => {
		console.log("create", roomId);
		navigate("/tictactoe");
	};
	const onJoinRoom = () => {
		console.log("join", roomId);
		navigate("/tictactoe");
	};

	const onRoomIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRoomId(event.target.value);
	};

	return (
		<div className={`content flex flex-col justify-center items-center gap-5 ${props.className}`}>
			<h1 className="text-3xl">Please enter roomId</h1>
			<form
				className="flex flex-col items-center relative"
				onSubmit={(event) => {
					event.preventDefault();
				}}
			>
				<div className="flex items-center">
					<Input onChange={onRoomIdChange} className="border-amber-300" required />
					<Button className="light-button mr-0" onClick={() => onJoinRoom()}>
						Join
					</Button>
				</div>
				<Button className="bg-cyan-400 light-button w-full" onClick={() => onCreateRoom()}>
					Create room
				</Button>
			</form>
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
