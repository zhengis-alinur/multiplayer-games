import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import GameChoose from "./pages/GameChoose";
import TicTacToe from "./pages/Tictactoe/TicTacToe";
import RoomConnector from "./components/RoomConnector";
import TypeRace from "./pages/TypeRace/TypeRace";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />
	},
	{
		path: "tictactoe",
		element: <TicTacToe />
	},
	{
		path: "typerace",
		element: <TypeRace />
	},
	{
		path: "gamechoose",
		element: <GameChoose />
	},
	{
		path: "roomconnector",
		element: <RoomConnector />
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
