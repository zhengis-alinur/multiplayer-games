// ProtectedRoute.js
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectRoomId, selectUser } from "../redux/selectors";

const ProtectedRoute = ({ component }: { component: ReactNode }) => {
	const user = useAppSelector(selectUser);

	if (!user) {
		return <Navigate to="/" />;
	}
	return component;
};

export default ProtectedRoute;
