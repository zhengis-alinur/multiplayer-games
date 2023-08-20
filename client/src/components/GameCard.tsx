import { Link } from "react-router-dom";

const GameCard = ({
	link,
	className,
	children,
	...props
}: { link: string } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	return (
		<div {...props} className={`p-5 drop-shadow-md cursor-pointer hover:drop-shadow-xl ${className}`}>
			<Link to={link}>{children}</Link>
		</div>
	);
};

export default GameCard;
