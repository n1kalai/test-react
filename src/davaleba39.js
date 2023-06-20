// // დავალება:
// // 1.შექმენით 2 გვერდიანი საიტი: მთავარი, პოსტის
// // 2.მთავარ გვცერდზე გამოიტანეეთ ყველა პოსტი ლინკიდან:
// https://jsonplaceholder.typicode.com/posts
// // 3.საკმარისია გამოიტანოთ title,body და button რომელიც
// გადაგიყვანთ პოსტის გვერდზე /post/:id
// // 4. პოსტის გვერდზე დაფეტჩეეთ ამ პოსტის ინფო დინამიური id დახმარებით ,
//  https://jsonplaceholder.typicode.com/posts/1 სადაც 1 წერია მანდ უნდა იყოს
//   დინამიური აიდი. ასევე დაფეტჩეთ ამ პოსტის კომენტარები
// https://jsonplaceholder.typicode.com/comments?postId=1 1 მაგივრად უნდა იყოს პოსტის იდ..
// // 5. გამოიტანეთ პოსტის title,body და კომენტარის email,body .

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const POSTS_DATA_URL = 'https://jsonplaceholder.typicode.com/posts'

const Davaleba39 = () => {
  const [data, setData] = useState()

  useEffect(() => {
    func()
  }, [])

  const func = async () => {
    await fetch(POSTS_DATA_URL)
      .then(res => res.json())
      .then(res => setData(res))
  }

  return (
    data?.map((item) => (
      <article key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        <Link to={`/post/${item.id}`}>click</Link>
      </article>
    ))
  )
}

export default Davaleba39
