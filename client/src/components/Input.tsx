import React, { useState } from "react";

const Input = ({
	onlyLetters,
	...props
}: { onlyLetters?: boolean } & React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>) => {
	const [value, setvalue] = useState<string>("");

	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const targetValue = event.target.value;

		if (targetValue === "") {
			setvalue(targetValue);
			return;
		}

		const regexPattern = onlyLetters ? /^[A-Za-z]+$/ : /^[A-Za-z0-9]+$/;

		if (regexPattern.test(targetValue)) {
			setvalue(targetValue);
		}
	};

	return (
		<input
			{...props}
			className={`bg-transparent border-4 border-white px-2 py-1 text-3xl max-h-12 ${props.className}`}
			type="text"
		/>
	);
};

export default Input;
