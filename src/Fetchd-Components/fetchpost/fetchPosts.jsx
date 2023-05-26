export const fetchPosts = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post = await result.json();
  return post;
};
