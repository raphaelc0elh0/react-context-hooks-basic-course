import React, { useState } from 'react'

const NewSongForm = (props) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSong(title);
    setTitle('');
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="song">Song Name:</label>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewSongForm
