import React from 'react'
import "../App.css";

export default function Profile() {
  return (
    <div className='profile'>
      <img
      className='photo'
      src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
      alt='avatar'
      />
      <h2>James Smith</h2>
      <p> Full-Stack Developer</p>
    </div>
  )
}

