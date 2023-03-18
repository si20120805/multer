import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (<>
  
  <NavLink  to='/grid'>Grid</NavLink> <br/>
    <NavLink to='/Uplaoder'>Uplaod</NavLink>
    <NavLink to='/sample'>sample</NavLink>

  
  </>
  

  )
}

export default Home