import * as React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { hero, navLinks } from '../style/layout.module.scss'

const Layout = ({ pageTitle, pageHeading, children }) => {

    return (
        <main className={hero}>
            <title>{pageTitle}</title>
                <nav className={navLinks}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            <h2>{pageHeading}</h2>
            {children}
        </main>
    )
}

export default Layout

Layout.propTypes = {
    pageTitle: PropTypes.string,
    pageHeading: PropTypes.string,
    children: PropTypes.node,
}