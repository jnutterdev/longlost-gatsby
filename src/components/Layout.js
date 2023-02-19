import * as React from 'react'
import PropTypes from 'prop-types'

import '../style/main.scss'
import Footer from './Footer'

const Layout = ({ pageTitle, pageHeading, children }) => {

    return (
        <main className="layout">
            <header>
                <h2>longlost: a terrible inconvenience</h2>
            </header>
            <section className="box m-6 bg-s">
                <date>02.17.23</date>
                <h3>° Currently reading</h3>
                    <p>I've been pretty busy as of late, so I haven't had much time to do leisurely activities. But, I have kept myself laughing at these  sites:</p>
                <ul>
                    <li><a href="/#">Diesel Sweeties</a></li>
                    <li><a href="/#">Penny Arcade</a></li>
                </ul>
                <h3>° Current listening material</h3>
                    <ul>
                        <li>1. <a href="/#">Below The Sea</a> - Les Arbres Dèpayseront Davantage : <a href="/#">Where Are My Records</a></li>
                        <li>2. <a href="/#">Evil Pupil</a> - Gallons of Void : <a href="/#">Cyclop Media</a></li>
                        <li>3. <a href="/#">The Dead Texan</a> - The Dead Texan : <a href="/#">Kranky Records</a></li>
                        <li>4. <a href="/#">Maximillian Colby</a> -Discography : <a href="/#">Lovitt Records</a></li>
                        <li>5. <a href="/#">Rothko</a> - A Negative For Francis: <a href="/#">Lo Recordings</a></li>
                    </ul>
                <h3>° Recent pictures</h3>
                    <img className="image" src="https://via.placeholder.com/100" alt="image 1" />
                    <img className="image" src="https://via.placeholder.com/100" alt="image 2" />
                    <img className="image" src="https://via.placeholder.com/100" alt="image 3" />
                    <img className="image" src="https://via.placeholder.com/100" alt="image 4" />
                <h3>° Music projects</h3>
                    <ul>
                        <li>1. Working on new material for Meson. New website coming soon.</li>
                         <li>2. Will be helping out with the new Rec|use material. More on that later.</li>
                    </ul>
                    <Footer></Footer>
            </section>
        </main>
    )
}

export default Layout

Layout.propTypes = {
    pageTitle: PropTypes.string,
    pageHeading: PropTypes.string,
    children: PropTypes.node,
}