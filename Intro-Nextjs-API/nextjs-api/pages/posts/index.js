import { useEffect, useState } from 'react'
import Head from 'next/head';
import axios from 'axios'

const Posts = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await axios.get('/api/posts');

      console.log(response.data)

      if (response?.data?.success) {
        setPosts(response.data.data)
      }
    } catch (error) {
      // console.log av feilen
      console.log(error?.response?.data)
    }
  }

  // trigger henting av data når komponenten lages
  useEffect(() => {
    getPosts()
  }, [])    

    return (
    <>
        <Head>
            <title>All posts</title>
        </Head>
        <h1>List of posts</h1>
        <ul>
        {
            posts?.length > 0 ? 
            (posts?.map(post => (
                <li key={post.id}>
                    <h5>{post.title}</h5>
                </li>
            ))) : null}
        </ul>
    </>)
}

export default Posts