import React from 'react'
import { Routes , Route } from 'react-router-dom'
import About from './About'
import Footer from './Footer'
import Main from './Main'

function Router() {
  return (
    <div>
        {/* <OutletComp/> */}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Router