import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Support from './Components/Support/Support'
import Info from './Components/Info/info'
import Lounge from './Components/Lounge/Lounge' 
import Travellers from './Components/Travellers/Travellers'
import Subscribers from './Components/Subscribers/Subscribers'

const App = () => {
  return (
    <div>
      <Travel Blog/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travellers/>
      <Subscribers/>
      <Lounge/>
      <Travel Blog/>
      </div>
  )
}

export default App