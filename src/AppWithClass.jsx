import { Component } from "react";

class AppWithClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 1,
			name: "nika",
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		console.log("component did mount");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("prevState", prevState);
		console.log("nextState", prevProps);
	}

	componentWillUnmount() {}

	componentDidCatch(error, info) {
		console.log("errored");
		console.log("erorshia", info);
	}

	handleClick() {
		this.setState((prevState) => {
			return {
				number: prevState.number + 1,
				name: prevState.name === "nika" ? "gela" : "nika",
			};
		});
	}

	render() {
		const { number, name } = this.state;
		console.log(name);
		return (
			<div onClick={this.handleClick}>
				this is class componentn {number} {name}
			</div>
		);
	}
}

export default AppWithClass;
