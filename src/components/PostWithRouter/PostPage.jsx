import { useEffect, useState } from "react";
import { useParams } from "react-router";


const PostPage = () => {
    const [postInfo, setPostInfo] = useState({});
    const [postcomments, setPostComments] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}` )
            .then(res => res.json())
            .then(data => setPostInfo(data))

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => setPostComments(data))

    },[])
    return (
        
                <div>
                    <h2>{postInfo.title}</h2>
                    <p>{postInfo.body}</p>
                    <h3>Comments</h3>
                    {postcomments.map(comment => {
                        return (
                            <>

                                <p>{comment.email}</p>
                                <p>{comment.body}</p>
                            </>
                        )
                    })}

                </div>
          
    )
}
export default PostPage;
