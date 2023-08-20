import React from "react";
import { GameSide } from "../../../types";
import { XSide } from "../../../constants";
import X from "./X";
import Circle from "./Circle";

const GameSide = ({
	title,
	gameSide,
	...props
}: { gameSide: GameSide; title: string } & React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>) => {
	return (
		<div className={`flex justify-start items-center ${props.className}`}>
			<h2 className="text-3xl">{title}</h2>
			{gameSide === XSide ? <X /> : <Circle />}
		</div>
	);
};

export default GameSide;
