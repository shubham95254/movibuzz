import React from 'react'
import "./style.scss"
import ChangingBanner from './changingBanner/ChangingBanner'
import Trending from "./Carousel/Trending";
import Popular from "./Popular";
import TopRated from "./TopRated";

const Home = () => {
  return (
    <div className='homePage'>
      <ChangingBanner/>
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home;
