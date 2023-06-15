// import React from "react";

// const Post = () => {
//   return <div>Posts</div>;
// };

// export default Post;

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const App = () => {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
};

export default App;
