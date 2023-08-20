import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";
import "./index.css";
import "./background.css";
import Background from "./components/Background.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<>
		<Background />
		<App />
	</>
);
