import { ReactNode } from "react";

const Button = ({
	children,
	...props
}: { children: ReactNode } & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) => {
	return (
		<button {...props} type="submit" className={`bg-amber-300 m-4 p-2 text-2xl h-12 ${props.className}`}>
			{children}
		</button>
	);
};

export default Button;
