import { useState } from 'react'

import axios from 'axios'
import Router from 'next/router'

const CreatePost = () => {
  const [post, setPost] = useState('')
  const [error, setError] = useState(null)

  const handleTitleChange = (event) => {
    setPost(event.target.value)
  }

  const createPost = async () => {
    try {
      
      const response = await axios.post('/api/posts', { title: post })

      if (response?.data?.success) {
        Router.push('/posts')
      }
    } catch (err) {
      setError(err?.response?.data?.error)
    }
  }

  // form
  const handleSubmit = async (event) => {
    event.preventDefault()
    await createPost()
  }


  if (error) {
    return <p>Noe gikk galt: {error}</p>
  }

  return (
    <div>
      <h1>Post something wicked</h1>
      <form style={{ marginBottom: '2rem' }} onSubmit={handleSubmit}>
        <label htmlFor="question">Ny post</label>
        <input
          id="post"
          type="text"
          name="post"
          value={post}
          onChange={handleTitleChange}
        />
        <button type="submit">Send</button>
      </form>
      <section>{JSON.stringify(post)}</section>
    </div>
  )
}

export default CreatePost
