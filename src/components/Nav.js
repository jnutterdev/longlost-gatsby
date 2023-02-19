import React from 'react'
import { Link } from 'gatsby-link'

export default function Nav() {
  return (
    <nav className="has-text-centered my-4">
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/posts">Posts</Link></li>
        </ul>
    </nav>
  )
}
