import * as React from 'react'
import PropTypes from 'prop-types'

import '../style/main.scss'
import Footer from './Footer'

const Layout = ({ pageTitle, pageHeading, children }) => {

    return (
        <main className="layout mb-6">
            <div className="headerTitle mt-6 ml-6">
                <h2 className="has-text-weight-bold">longlost: the terrible inconvenience of</h2>
            </div>
            <section className="box mx-6 bg-s">
                <div className="mb-4">
                    <date className="mb-3">02.17.23</date>
                </div>
                <div className="mb-4">
                    <h3 className="has-text-weight-bold">° Currently reading</h3>
                        <p className="">I've been pretty busy as of late, so I haven't had much time to do leisurely activities. But, I have kept myself laughing at these  sites:</p>
                    <ul>
                        <li><a href="/#">Diesel Sweeties</a></li>
                        <li><a href="/#">Penny Arcade</a></li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className="has-text-weight-bold">° Current listening material</h3>
                        <ul>
                            <li>1. <a href="https://belowthesea.bandcamp.com/" target="_blank">Below The Sea</a> - Les Arbres Dèpayseront Davantage : <a href="https://wherearemyrecords.bandcamp.com/album/les-arbres-d-payseront-davatage" target="_blank">Where Are My Records</a></li>
                            <li>2. <a href="https://evilpupil.bandcamp.com/album/gallons-of-void" target="_blank">Evil Pupil</a> - Gallons of Void : <a href="https://www.discogs.com/label/43004-Cyclop-Media" target="_blank">Cyclop Media</a></li>
                            <li>3. <a href="https://starsofthelid.bandcamp.com/album/the-dead-texan" target="_blank">The Dead Texan</a> - The Dead Texan : <a href="https://kranky.bandcamp.com/" target="_blank">Kranky Records</a></li>
                            <li>4. <a href="https://maximilliancolby.bandcamp.com/album/discography" target="_blank">Maximillian Colby</a> -Discography : <a href="https://lovitt.bandcamp.com/" target="_blank">Lovitt Records</a></li>
                            <li>5. <a href="https://lorecordings.bandcamp.com/album/a-negative-for-francis-lo12" target="_blank">Rothko</a> - A Negative For Francis : <a href="https://lorecordings.bandcamp.com/music" target="_blank">Lo Recordings</a></li>
                        </ul>
                </div>
                <div className="mb-4">
                    <h3 className="has-text-weight-bold">° Recent pictures</h3>
                        <img className="image" src="https://via.placeholder.com/100" alt="image 1" />
                        <img className="image" src="https://via.placeholder.com/100" alt="image 2" />
                        <img className="image" src="https://via.placeholder.com/100" alt="image 3" />
                        <img className="image" src="https://via.placeholder.com/100" alt="image 4" />
                </div>
                <div className="mb-4">
                    <h3 className="has-text-weight-bold">° Music projects</h3>
                        <ul>
                            <li>1. Working on new material for Meson. New website coming soon.</li>
                            <li>2. Will be helping out with the new Rec|use material. More on that later.</li>
                        </ul>
                        <Footer></Footer>
                </div>
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