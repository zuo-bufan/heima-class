import React from 'react'
import axios from 'axios'
import { createRef } from 'react'
export default function Form({ closeform }) {
  const authorRef = createRef()
  const commentRef = createRef()
  const attitudeRef = createRef()
  const submit = async (e) => {
    e.preventDefault()
    if (
      authorRef.current.value === '' ||
      commentRef.current.value === '' ||
      attitudeRef.current.value === ''
    )
      return
    await axios.post('http://localhost:8888/list', {
      id: new Date(),
      author: authorRef.current.value,
      comment: commentRef.current.value,
      attitude: attitudeRef.current.value,
      time: new Date(),
    })
    closeform()
  }
  return (
    <form className="fm">
      <p>
        author:
        <input type="text" ref={authorRef} style={{ width: '200px' }} />
      </p>
      <p>
        comments:
        <input type="text" ref={commentRef} style={{ width: '200px' }} />
      </p>
      <p>
        attitude:
        <input type="text" ref={attitudeRef} style={{ width: '200px' }} />
      </p>
      <p>
        <input className="button" type="submit" value="提交" onClick={submit} />
      </p>
    </form>
  )
}
