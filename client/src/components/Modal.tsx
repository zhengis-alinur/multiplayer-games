import React from "react";
import Button from "./Button";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/selectors";
import { useAppDispatch } from "../redux/store";
import { hideModal } from "../redux/reducer";

const Modal = ({ isOpen, message }: { isOpen: boolean; message: string }) => {
	const user = useAppSelector(selectUser);
	const dispatch = useAppDispatch();
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(hideModal());
	};

	return (
		<div className={`${isOpen ? "block" : "hidden"} fixed inset-0 flex items-center justify-center z-50`}>
			<div className="absolute inset-0 bg-gray-800 opacity-75" />
			<div className="bg-primary p-6 z-10 flex flex-col items-center justify-center">
				<h2 className="text-3xl mb-4">{`Hey, ${user || "friend"}!`}</h2>
				<p className="text-xl  mb-4">{message}</p>
				<form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
					<Button className="w-full">Ok</Button>
				</form>
			</div>
		</div>
	);
};

export default Modal;
