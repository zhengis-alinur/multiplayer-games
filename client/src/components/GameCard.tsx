import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { Game } from "../types";
import { setGameThunk } from "../redux/thunk";

const GameCard = ({
	game,
	className,
	children,
	...props
}: { game: Game } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	const dispatch = useAppDispatch();
	const onGameClick = () => {
		setGameThunk(dispatch, { game });
	};
	return (
		<div {...props} className={`p-5 drop-shadow-md cursor-pointer hover:drop-shadow-xl ${className}`}>
			<Link to={`/roomconnector`} onClick={onGameClick}>
				{children}
			</Link>
		</div>
	);
};

export default GameCard;
