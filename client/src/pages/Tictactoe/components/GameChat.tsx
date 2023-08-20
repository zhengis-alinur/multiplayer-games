import React, { useState } from "react";
import Input from "../../../components/Input";

const GameChat = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	const userId = "123123123";
	const [messages, setMessages] = useState([
		{
			text: "some message",
			userId: "123123123"
		},
		{
			text: "some message",
			userId: "12312w123"
		},
		{
			text: "some message",
			userId: "123123123"
		},
		{
			text: "some message",
			userId: "12312w123"
		},
		{
			text: "some message",
			userId: "123123123"
		},
		{
			text: "some message",
			userId: "123123123"
		},
		{
			text: "some message",
			userId: "123123123"
		}
	]);
	return (
		<div className={`flex flex-col justify-between bg-white/10 ${props.className}`} style={{ maxHeight: "400px" }}>
			<div className="flex flex-col messages p-5 overflow-y-auto">
				{messages.map((message) => (
					<div
						className={`message text-black bg-cyan-200 p-2 m-3 w-fit ${
							message.userId === userId && "self-end bg-amber-400"
						}`}
					>
						<span>{message.text}</span>
					</div>
				))}
			</div>
			<Input className="border-l-0 border-r-0  border-b-0 border-t-6" />
		</div>
	);
};

export default GameChat;
