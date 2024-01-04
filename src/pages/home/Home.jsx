import React from 'react'
import "./style.scss"
import ChangingBanner from './changingBanner/ChangingBanner'
import Trending from "./Carousel/Trending";
const Home = () => {
  return (
    <div className='homePage'>
      <ChangingBanner/>
      <Trending />
      <div style = {{height:1000 }}></div>
    </div>
  )
}

export default Home
