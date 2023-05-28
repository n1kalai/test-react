import { Component } from "react";
import { Fetchdatathird } from "./api/appclassthirtfetch";

class AppWithClassthird extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        isLoading: true,
        isLoaded: false,
        isError: false,
        selectedPostId: null,
        comments: [],
    }
    
  }

  async componentDidMount() {
    try {
      const cocktails = await Fetchdatathird();
      this.setState({
       
          cocktails,
          isLoading: false,
          isLoaded: true,
          isError: false,

      });

    } catch (err) {
      this.setState({
     
          cocktails: [],
          isLoading: false,
          isLoaded: true,
          isError: true,

      });
    }
  }
// why  handleClick = async (postId) 
 async handleClick (postId) {
    try {
      const commentsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const commentsData = await commentsResponse.json();


      this.setState({

        selectedPostId: postId,
        comments: commentsData,
        
      });

    } catch (err) {
      console.error("Error fetching comments:", err);
    }
  };

  render() {
    const { cocktails, selectedPostId, comments, isLoading, isError } = this.state;

    if (isLoading) {
      return <h1>იტვირთება...</h1>;
    }

    if (isError) {
      return <h1>შეცდომა...</h1>;
    }

    return (
      <section className="cocktails-container">
        {cocktails.map((element) => (
          <div key={element.id}>
            <p style={{ color: "blue" }}>{element.title}</p>
            <span>{element.body}</span>
            <br />
            <br />
            <button onClick={() => this.handleClick(element.id)}>
                
              See comments
            </button>

            {selectedPostId === element.id ? (
               <div>
                 <h3>Comments</h3>

                 {comments.map((comment) => (

                <div key={comment.id}>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
               </div>
                ))}
    
                </div>
                ) : " "}

          </div>
        ))}
      </section>
    );
  }
}

export default AppWithClassthird;