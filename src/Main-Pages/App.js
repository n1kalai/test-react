import { Component } from "react";
import { fetchPosts } from "../Fetchd-Components/fetchpost/fetchPosts";
import { fetchPostsByID } from "../Fetchd-Components/fetchpostByID/fetchpostByID";

class AppWithPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PostsData: [],
      CommentID: [],
      isLoading: true,
      isLoaded: false,
      isError: false,
    };

    this.handleButtonClick = async (postId) => {
      try {
        const comments = await fetchPostsByID(postId);
        this.setState({ CommentID: comments });
      } catch (error) {
        console.error(error);
      }
    };
  }

  async componentDidMount() {
    try {
      const post = await fetchPosts();
      const komentari = fetchPostsByID();
      console.log(komentari, "kkk");

      this.setState({
        PostsData: post,
        PostsBYid: komentari,
        isLoading: false,
        isLoaded: true,
        isError: false,
      });
    } catch (error) {
      this.setState({
        post: {
          PostsData: [],
          CommentID: [],
          isLoading: false,
          isLoaded: true,
          isError: true,
        },
      });
    }
  }

  render() {
    const { PostsData, CommentID } = this.state;
    console.log(Comment);
    if (PostsData.isLoading) {
      return <h1>იტვირთება...</h1>;
    }
    if (PostsData.isError) {
      return <h1>შეცდომა...</h1>;
    }
    return PostsData.map((post) => {
      return (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <button onClick={() => this.handleButtonClick(post.id)}>
            see comment
          </button>
          {CommentID.map((comment) => (
            <p key={comment.id}>{comment.body}</p>
          ))}
        </div>
      );
    });
  }
}
export default AppWithPosts;
