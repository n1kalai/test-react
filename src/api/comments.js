export const fetchCommentsById = async (postId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error fetching comments:", error);
      return [];
    }
  };  