import React from 'react'
import Hero from '../Components/Hero/Hero.jsx'
import Popular from '../Components/Popular/Popular.jsx'
import Offers from '../Components/Offers/Offers.jsx'
import NewsLetter from '../Components/NewsLetter/NewsLetter.jsx'

const Home = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <NewsLetter/>
        </div>
    )
}

export default Home;