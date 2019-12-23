import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import '../scss/main.scss'

function Index() {
    return (
        <body>
            <Navbar />
            <main>
                <section className="home">
                    <h1 className="home__name">
                        Tom <span className="home__name--last">Jerry</span>
                    </h1>
                    <h2>
                        Frontend, Fullstack Developer & Programmer
                    </h2>
                    <Footer />
                </section>
            </main>
        </body>
    )
}

export default Index;