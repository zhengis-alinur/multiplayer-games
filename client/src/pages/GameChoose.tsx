import { TypeAnimation } from "react-type-animation";
import GameCard from "../components/GameCard";

const GameChoose = () => {
	return (
		<div className="page relative h-screen flex flex-col items-center justify-center">
			<div className="w-1/2 flex flex-col gap-20">
				<TypeAnimation
					sequence={[
						"Here you can payl 2 gam",
						200, // wait 1s before replacing "Mice" with "Hamsters"
						"Here you can p",
						200, // wait 1s before replacing "Mice" with "Hamsters"
						"Here you can play 2 gsmes",
						200, // wait 1s before replacing "Mice" with "Hamsters"
						"Here you can play 2 g",
						200, // wait 1s before replacing "Mice" with "Hamsters"
						"Here you can play 2 games"
					]}
					wrapper="span"
					speed={50}
					style={{ fontSize: "3rem", display: "inline-block" }}
				/>
				<div className="flex justify-between items-center w-full  max-w-3xl">
					<GameCard className="bg-cyan-700" link="/tictactoe">
						<h2 className="text-6xl">TicTacToe</h2>
					</GameCard>
					<h2 className="text-6xl">or</h2>
					<GameCard className="bg-rose-700" link="/typerace">
						<h2 className="text-6xl">Type Race</h2>
					</GameCard>
				</div>
			</div>
		</div>
	);
};

export default GameChoose;
