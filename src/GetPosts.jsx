import React, { Component } from "react";
import "../src/App.css";

class GetPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: [],
            postComments: [],
            isLoading: true,
            isLoaded: false,
            isError: false,
        };
    }

    fetchedposts = async () => {
        try {
          const result = await fetch('https://jsonplaceholder.typicode.com/posts');
          const data = await result.json();
          return data;
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
      }
      

    fetchComentsById = async (id) => {
        try {
            const fetchComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            const commentsData = await fetchComments.json();
            this.setState((prevState) => ({
                postComments: [...prevState.postComments, ...commentsData]
            }));
        } catch (error) {
            console.error(error);
        }
    }    

    async componentDidMount() {
        try {
            const data = await this.fetchedposts();
            this.setState({
                postData: data,
                isLoading: false,
                isLoaded: true,
                isError: false
            });
        } catch (error) {
            console.error(error);
            this.setState({
                isLoading: false,
                isLoaded: true,
                isError: true
            });
        }
    }    

    render() {
        const { postData, postComments } = this.state;

        return (
            <>
                {postData.map((ele) => (
                    <article key={ele.id}>
                        <h1>{ele.title}</h1>
                        <p>{ele.body}</p>
                        <button
                            id={ele.id}
                            onClick={(event) => {
                                this.fetchComentsById(event.target.id);
                            }}
                        >
                            See comments
                        </button>
                        {postComments.map((elem) =>
                            ele.id === elem.postId ? (
                                <div key={elem.id}>
                                    <h5>{elem.body}</h5>
                                </div>
                            ) : null
                        )}
                    </article>
                ))}
            </>
        );
    }
}

export default GetPosts;
