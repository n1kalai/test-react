// import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// const MainPostsPage = () => {
//   const [posts, setPosts] = useState([]);
//   // const push = useNavigate();

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         setPosts(data);
//       });
//   }, []);

//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MainPostsPage;
