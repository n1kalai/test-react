export const  fetchComments = async () => {
    return fetch(
        'https://jsonplaceholder.typicode.com/comments'
    )
        .then(response => response.json())
        .then(json => json)
}
