import React from "react"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Buttons from "./Components/Buttons"
import Cards from "./Components/Cards"
import Footer from "./Components/Footer"

const Home = () => {

    return (
        <div className="bg-white relative">
            <Header/>
            <Hero/>
            {/* <Buttons/> */}
            <Cards/>
            <Footer/>
        </div>
    )
}

export default Home