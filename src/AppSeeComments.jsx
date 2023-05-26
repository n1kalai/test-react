import { Component } from 'react';
import './App.css';
import { fetchPost } from './api/post';
import { fetchComments } from './api/comments';





class AppSeeComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            post: [],
            answer: [],
        };
    }

    async componentDidMount() {
        const posts = await fetchPost();
        const comment = await fetchComments();
        const mapedComment = comment.map(item => {
            return item
        })

        this.setState({
            post: posts,
            comments: mapedComment,
        })
        


    }

    render() {
        
        console.log(this.state.comments);
        return (
            <div className='container'>
                <div className='left'>
                <h1>Post</h1>
                {this.state.post.map((post,index) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button onClick={() => this.state.comments.map((item ) => item.id === post.id && this.setState({answer: item.body}))}>See Comments</button>
                    </div>
                ))}
                    
                </div>
                <div className='right'>
                <p>{this.state.answer}</p>

                </div>
            </div>
        );

    }

}

export default AppSeeComments;
