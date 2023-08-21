import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";
import "./index.css";
import "./background.css";
import Background from "./components/Background.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<Background />
		<App />
	</Provider>
);
