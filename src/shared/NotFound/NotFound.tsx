import React from 'react'
import { Link } from 'react-router-dom'

export  function NotFound() {
  return (
    <div>
      404: NotFound
      <Link to={"/"}>
        Home
      </Link>
    </div>
  )
}
