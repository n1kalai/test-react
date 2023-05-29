import "./App.css";
import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
	const [results, setResults] = useState([]);

	return (
		<div className="search-app">
			<div className="search-bar-container">
				<SearchBar setResults={setResults} />
				<SearchResultsList results={results} />
			</div>
		</div>
	)
}

export default App;