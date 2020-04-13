import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../scss/main.scss'

function HomePage() {
    return (
        <div>
            < Navbar />
            <section className="home">
                <h1 className="home__name">
                    Tong <span className="home__name__last">Wang</span>
                </h1>
                <h2>
                    Frontend, Fullstack Developer & Programmer
                    </h2>
            </section>
            <Footer />
        </div>
    )
}

export default HomePage;