import { TypeAnimation } from "react-type-animation";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import socket from "../socket";
import { useEffect, useState } from "react";
import { setUser, showModal } from "../redux/reducer";
import { useAppDispatch } from "../redux/store";
import { setUserThunk } from "../redux/thunk";
import { useAppSelector } from "../redux/hooks";
import { selectRoomId, selectUser } from "../redux/selectors";

const Main = () => {
	const user = useAppSelector(selectUser);
	const roomId = useAppSelector(selectRoomId);
	const [userName, setUserName] = useState(user);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		function loginSuccess(userName: string) {
			setUserThunk(dispatch, { userName });
			navigate("gamechoose");
		}
		socket.on("loginSuccess", loginSuccess);
	}, [socket]);

	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserName(event.target.value);
	};

	const onLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		socket.emit("login", { userName, roomId });
	};

	return (
		<div className="page h-screen flex flex-col items-center justify-center gap-5">
			<h1 className="text-9xl">Hello world!</h1>
			<div className="content">
				<TypeAnimation
					className=""
					sequence={["We produce food for Mice", 1000, "We produce food for Hamsters"]}
					wrapper="span"
					speed={50}
					style={{ fontSize: "1.5em", display: "inline-block" }}
				/>
			</div>
			<form className="flex flex-col items-center relative" onSubmit={onLogin}>
				<Input onlyLetters required onChange={onInputChange} />
				<Button className="light-button">Let's Go</Button>
			</form>
		</div>
	);
};

export default Main;
