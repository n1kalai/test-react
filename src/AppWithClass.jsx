// import { Component, useEffect, useState } from "react";
// import { fetchCocktails } from "./api/cocktails";
// import { CocktailContainer } from "./components/cocktails/CocktailContainer";

// const cocktailsDefaultState = {
// 	data: [],
// 	isLoading: true,
// 	isLoaded: false,
// 	isError: false,
// };

// const AppWithClass = () => {
// 	const [cocktails, setCocktails] = useState(cocktailsDefaultState);
// 	console.log(cocktails);
// 	useEffect(() => {
// 		getCocktailsData();
// 	}, []);

// 	const getCocktailsData = async () => {
// 		try {
// 			const cocktails = await fetchCocktails();
// 			console.log(cocktails);
// 			setCocktails({
// 				data: cocktails,
// 				isLoading: false,
// 				isLoaded: true,
// 				isError: false,
// 			});
// 		} catch (error) {
// 			setCocktails({
// 				data: [],
// 				isLoading: false,
// 				isLoaded: true,
// 				isError: true,
// 			});
// 		}
// 	};

// 	const handleDelete = (id) => {
// 		const filteredArr = cocktails.data.filter(
// 			(cocktail) => cocktail.idDrink !== id
// 		);
// 		setCocktails({
// 			data: filteredArr,
// 			isLoading: false,
// 			isLoaded: true,
// 			isError: false,
// 		});
// 	};

// 	if (cocktails.isLoading) {
// 		return <h1>Loading...</h1>;
// 	}

// 	if (cocktails.isError) {
// 		return <h1>error</h1>;
// 	}

// 	if (!cocktails.data.length) {
// 		return <h1>No cocktails found</h1>;
// 	}

// 	return (
// 		<section className="cocktails-container">
// 			{cocktails.data.map((cocktail) => (
// 				<CocktailContainer
// 					onDelete={handleDelete}
// 					key={cocktail.idDrink}
// 					cocktail={cocktail}
// 				/>
// 			))}
// 		</section>
// 	);
// };

// class AppWithClassx extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			cocktails: {
// 				data: [],
// 				isLoading: true,
// 				isLoaded: false,
// 				isError: false,
// 			},
// 			more: {

// 			}
// 		};
// 		this.handleDelete = this.handleDelete.bind(this);
// 	}

// 	async componentDidMount() {
// 		try {
// 			const cocktails = await fetchCocktails();
// 			this.setState({
// 				cocktails: {
// 					data: cocktails,
// 					isLoading: false,
// 					isLoaded: true,
// 					isError: false,
// 				},
// 			});
// 		} catch (err) {
// 			this.setState({
// 				cocktails: {
// 					data: [],
// 					isLoading: false,
// 					isLoaded: true,
// 					isError: true,
// 				},
// 			});
// 		}
// 	}

// 	handleDelete(id) {
// 		const newArray = [...this.state.cocktails.data];
// 		const filteredArray = newArray.filter((element) => element.idDrink !== id);
// 		this.setState({
// 			cocktails: {
// 				data: filteredArray,
// 				isLoading: false,
// 				isLoaded: true,
// 				isError: false,
// 			},
// 		});
// 	}

// 	render() {
// 		const { cocktails } = this.state;

// 		if (cocktails.isLoading) {
// 			return <h1>იტვირთება...</h1>;
// 		}

// 		if (cocktails.isError) {
// 			return <h1>შეცდომა...</h1>;
// 		}

// 		return (
// 			<section className="cocktails-container">
// 				{cocktails.data.map((cocktail) => (
// 					<CocktailContainer
// 						onDelete={this.handleDelete}
// 						cocktail={cocktail}
// 						key={cocktail.idDrink}
// 					/>
// 				))}
// 			</section>
// 		);
// 	}
// }

{
	/* <CocktailComponent /> */
}

// export default AppWithClass;

// componentDidUpdate(prevProps, prevState) {
// 	console.log("prevState", prevState);
// 	console.log("nextState", prevProps);
// }

// componentDidMount
// componentWillUnmount() {}
// componentDidUpdate

// componentDidCatch(error, info) {
// 	console.log("errored");
// 	console.log("erorshia", info);
// }
