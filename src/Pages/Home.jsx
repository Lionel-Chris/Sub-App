import React from 'react'
import Hero from '../InnerPage/Hero'
import Meterics from '../InnerPage/Metrics'
import SubPlans from '../InnerPage/SubPlans'
import Sublndex from '../InnerPage/SubIndex'
import Services from '../InnerPage/Services'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Sublndex/>
      <Meterics/>
      <Services/>
      <SubPlans/>
    </div>
  )
}

export default Home