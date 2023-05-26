import { Component } from "react";
import { fetchCocktails } from "../Fetchd-Components/coctails/cocktails";
import { CocktailContainer } from "../components/cocktails/CocktailContainer";

class AppWithClass extends Component {
  constructor() {
    super();
    this.state = {
      cocktails: {
        isLoading: true,
        isLoaded: false,
        isError: false,
      },
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    try {
      const cocktails = await fetchCocktails();
      this.setState({
        cocktails: {
          data: cocktails,
          isLoading: false,
          isLoaded: true,
          isError: false,
        },
      });
    } catch (err) {
      this.setState({
        cocktails: {
          data: [],
          isLoading: false,
          isLoaded: true,
          isError: true,
        },
      });
    }
  }

  handleDelete(id) {
    const newArray = [...this.state.cocktails.data];
    const filteredArray = newArray.filter((element) => element.idDrink !== id);
    this.setState({
      cocktails: {
        data: filteredArray,
        isLoading: false,
        isLoaded: true,
        isError: false,
      },
    });
  }

  render() {
    const { cocktails } = this.state;

    if (cocktails.isLoading) {
      return <h1>იტვირთება...</h1>;
    }

    if (cocktails.isError) {
      return <h1>შეცდომა...</h1>;
    }

    return (
      <section className="cocktails-container">
        {cocktails.data.map((cocktail) => (
          <CocktailContainer
            onDelete={this.handleDelete}
            cocktail={cocktail}
            key={cocktail.idDrink}
          />
        ))}
      </section>
    );
  }
}

export default AppWithClass;
