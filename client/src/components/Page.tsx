import { ReactNode } from "react";

const Page = ({ children, title, subtitle }: { children: ReactNode; title?: string; subtitle?: string }) => {
	return (
		<div className="page h-screen flex flex-col items-center justify-start w-full max-w-7xl m-auto">
			<h1 className="text-8xl m-10 mb-0">{title}</h1>
			<h2 className="text-2xl m-4 mt-0">{subtitle}</h2>
			{children}
		</div>
	);
};

export default Page;
