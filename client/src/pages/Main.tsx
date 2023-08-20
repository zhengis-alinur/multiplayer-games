import { TypeAnimation } from "react-type-animation";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
const Main = () => {
	const navigate = useNavigate();
	return (
		<div className="page h-screen flex flex-col items-center justify-center gap-5">
			<h1 className="text-9xl">Hello world!</h1>
			<div className="content">
				<TypeAnimation
					className=""
					sequence={[
						// Same substring at the start will only be typed out once, initially
						"We produce food for Mice",
						1000, // wait 1s before replacing "Mice" with "Hamsters"
						"We produce food for Hamsters"
					]}
					wrapper="span"
					speed={50}
					style={{ fontSize: "1.5em", display: "inline-block" }}
				/>
			</div>
			<form className="flex flex-col items-center relative" onSubmit={() => navigate("gamechoose")}>
				<Input onlyLetters required />
				<Button className="light-button">Let's Go</Button>
			</form>
		</div>
	);
};

export default Main;
