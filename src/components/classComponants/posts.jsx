import {Component} from 'react';
import PostsContent from './postsContent';


class PostsComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [],
        isLoaded: false,
        isLoading: true,
        isError: false,
        activePostId: null,
        comments: {},
        commentsLoading: false,
        commentsError: false,
      };
    }
  
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            posts: data,
            isLoaded: true,
            isLoading: false,
            isError: false,
          });
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          this.setState({
            posts: [],
            isLoaded: true,
            isLoading: false,
            isError: true,
          });
        });
    }
  
    fetchComments(postId) {
      this.setState(
        (prevState) => ({
          activePostId: prevState.activePostId === postId ? null : postId,
          commentsLoading: !prevState.commentsLoading,
          commentsError: false,
        }),
        () => {
          if (this.state.activePostId === postId) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
              .then((response) => response.json())
              .then((data) => {
                this.setState((prevState) => ({
                  comments: {
                    ...prevState.comments,
                    [postId]: data,
                  },
                  commentsLoading: false,
                  commentsError: false,
                }));
              })
              .catch((error) => {
                console.error('Error fetching comments:', error);
                this.setState((prevState) => ({
                  comments: {
                    ...prevState.comments,
                    [postId]: [],
                  },
                  commentsLoading: false,
                  commentsError: true,
                }));
              });
          }
        }
      );
    }
  
    render() {
      const {
        posts,
        isLoading,
        isError,
        activePostId,
        comments,
        commentsLoading,
        commentsError,
      } = this.state;
  
      if (isLoading) {
        return <h1>Loading...</h1>;
      }
  
      if (isError) {
        return <h1>Error...</h1>;
      }
  
      return (
        <>
          {posts.map((post) => {
            const { id, title, body } = post;
            return (
              <PostsContent
                key={id}
                id={id}
                title={title}
                body={body}
                handleClick={this.fetchComments.bind(this)}
                activePostId={activePostId}
                commentsError={commentsError}
                commentsLoading={commentsLoading}
                comments={comments[id] || []}
              />
            );
          })}
        </>
      );
    }
  }



export default PostsComponent;

