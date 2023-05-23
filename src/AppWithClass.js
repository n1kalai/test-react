import "./App.css";
import "./style.css";
import fetchingComments from "./api/comments";
import showComments from "./api/showComments";
import React, { Component } from "react";

const commentsDefaultState = {
    data: [],
    isLoading: true,
    isLoaded: false,
    isError: false,
};

class AppWithClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: commentsDefaultState,
            newComments: {},
        }
    }

    componentDidMount() {
        this.handleFetchComments();
    }

    handleFetchComments = async () => {
        try {
            const fetchedComments = await fetchingComments();
            this.setState({
                posts: {
                data: fetchedComments,
                isLoading: false,
                isLoaded: true,
                isError: false,
        },
      });

        } catch(err) {
            this.setState({
                posts: {
                    data: [],
                    isLoading: false,
                    isLoaded: true,
                    isError: true,
                },
              });
        }
    }

    onClick = async (id) => {
        try {
            const fetchedShowComments = await showComments(id);
            this.setState((prevState) => ({
              newComments: {
                ...prevState.newComments,
                [id]: fetchedShowComments,
              },
            }));
          } catch (err) {
            console.log(err);
          }
        }

    render() {
        const { posts, newComments } = this.state;

        if (posts.isLoading) {
            return <h1>იტვირთება...</h1>;
        }

        if (posts.isError) {
            return <h1>შეცდომაა...</h1>;
        }

        return (
            <div className="container">
              {posts.data.map((element) => {
                return (
                  <div className="post-section" key={element.id}>
                    <p className="post-text">POST</p>
                    <h1>{element.title}</h1>
                    <p>{element.body}</p>
                    <button className="div-button" onClick={() => this.onClick(element.id)}>
                      Comments
                    </button>
                    {newComments[element.id] && (
                      <div className="shown-comments">
                        <p className="post-text">COMMENTS</p>
                        {newComments[element.id].map((comment) => (
                          <div key={comment.id}>
                            <h2>{comment.name}</h2>
                            <p>{comment.body}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        }
      }

export default AppWithClass;