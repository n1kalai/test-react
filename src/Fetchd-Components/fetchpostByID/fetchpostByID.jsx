export const fetchPostsByID = async (id) => {
  try {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const postComments = await result.json();
    return postComments;
  } catch (error) {
    console.error(error);
  }
};
