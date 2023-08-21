import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import GameChoose from "./pages/GameChoose";
import TicTacToe from "./pages/Tictactoe/TicTacToe";
import TypeRace from "./pages/TypeRace/TypeRace";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import Modal from "./components/Modal";
import { useAppSelector } from "./redux/hooks";
import { selectModal, selectRoomId } from "./redux/selectors";
import RoomConnector from "./pages/RoomConnector";

function App() {
	const modal = useAppSelector(selectModal);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main />
		},
		{
			path: "tictactoe",
			element: <ProtectedRoute component={<TicTacToe />} />
		},
		{
			path: "typerace",
			element: <ProtectedRoute component={<TypeRace />} />
		},
		{
			path: "gamechoose",
			element: <ProtectedRoute component={<GameChoose />} />
		},
		{
			path: "roomconnector",
			element: <ProtectedRoute component={<RoomConnector />} />
		}
	]);

	useEffect(() => {
		return () => {
			sessionStorage.clear();
		};
	}, []);
	return (
		<>
			<RouterProvider router={router} />
			<Modal {...modal} />
		</>
	);
}

export default App;
