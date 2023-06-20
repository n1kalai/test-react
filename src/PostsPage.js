import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const POST_DATA_URL = 'https://jsonplaceholder.typicode.com/posts'
const COMMENTS_DATA = 'https://jsonplaceholder.typicode.com/comments?postId'

const PostsPage = () => {
  const [data, setData] = useState()
  const [comment, setComment] = useState()
  const { id } = useParams()

  useEffect(() => {
    func()
  }, [])

  const func = async () => {
    await fetch(`${POST_DATA_URL}/${id}`)
      .then(res => res.json())
      .then(res => setData(res))
    await fetch(`${COMMENTS_DATA}=${id}`)
      .then(res => res.json())
      .then(res => setComment(res))
  }

  return data && comment && (
    <>
      <article>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </article>
      <hr />
      {comment.map((item) => (
        <article key={item.id}>
          <h3>{item.email}</h3>
          <p>{item.body}</p>
        </article>))}
    </>
  )
}

export default PostsPage
