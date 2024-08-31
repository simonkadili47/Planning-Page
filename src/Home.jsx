import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Buttons from './Components/Buttons'
import Cards from './Components/Cards'

const Home = () => {
  return (
    <div className='bg-white relative'>
        <Header/>
        <Body/>
        <Buttons/>
        <Cards/>


    </div>
  )
}

export default Home