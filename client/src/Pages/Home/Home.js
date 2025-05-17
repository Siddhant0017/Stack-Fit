import React from 'react'
import './Home.css';
import Forms from '../../components/Forms/Form';
import Records from '../../components/Records/Records'; 

const Home = () => {
  return (
   <div className='home-section'>
  <Records/>
  <Forms/>
  
  
   </div>
  )
}

export default Home