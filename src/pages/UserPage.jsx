import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UserPage = () => {
	const [user, setUser] = useState({
		isLoading: true,
		isLoaded: false,
		isError: false,
		data: {},
	});
	const { id } = useParams();
	const push = useNavigate();

	useEffect(() => {
		handleFetchUser();
	}, []);

	const handleNavigateBack = () => {
		push(-1);
	};

	const handleFetchUser = async () => {
		try {
			const user = await fetch(
				`https://jsonplaceholder.typicode.com/users/${id}`
			);

			const userData = await user.json();
			setUser({
				isLoaded: true,
				isLoading: false,
				isError: false,
				data: userData,
			});
		} catch (err) {
			setUser({
				isLoaded: true,
				isLoading: false,
				isError: true,
				data: {},
			});
		}
	};

	if (user.isLoading) {
		return <h1>Loading...</h1>;
	}
	if (user.isError) {
		return <h1>error... </h1>;
	}

	return (
		<div>
			<h1>User: {user.data.name}</h1>
			<p>about company: {user.data.company.name}</p>
			<button onClick={handleNavigateBack}>Back</button>
		</div>
	);
};
