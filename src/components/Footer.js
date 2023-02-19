import React from 'react'
import Nav from './Nav'

export default function footer() {
  return (
    <footer>
        <Nav></Nav>
        <div className="has-text-centered">
          <p>© Copyright 2004-2023. longlostforgotten.com by John Nutter. All rights reserved.</p>
        </div>
    </footer>
  )
}
