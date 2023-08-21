import Page from "../../components/Page";
import GameBoard from "../Tictactoe/components/GameBoard";

const TypeRace = () => {
	return (
		<Page title="Type Race" subtitle="you know the rules">
			<div className="content">
				<GameBoard />
			</div>
		</Page>
	);
};

export default TypeRace;
